// instrumentation.ts
import { NodeSDK } from '@opentelemetry/sdk-node'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

export function register() {
  // Evita problemas de tipos/ESM al usar bundler resolution
  const { Resource } = require('@opentelemetry/resources') as { Resource: any }

  const url = process.env.OTEL_EXPORTER_OTLP_ENDPOINT
  const headers = process.env.OTEL_EXPORTER_OTLP_HEADERS
    ? JSON.parse(process.env.OTEL_EXPORTER_OTLP_HEADERS)
    : undefined

  const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter({ url, headers }),
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]:
        process.env.OTEL_SERVICE_NAME ?? 'next-risk-otel',
      // Puedes añadir más atributos si quieres:
      // [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: process.env.NODE_ENV ?? 'production',
    }),
  })

  sdk.start()

  // Apagado ordenado (útil en dev / serverless)
  const shutdown = () => sdk.shutdown().catch(() => {})
  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
  process.on('beforeExit', shutdown)
}
