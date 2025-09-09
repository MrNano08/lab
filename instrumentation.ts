// instrumentation.ts
import { NodeSDK } from '@opentelemetry/sdk-node'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

// 👇 Evita el problema de tipos/ESM con bundler resolution
export function register() {
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
    }),
  })

  sdk.start()
  process.on('beforeExit', async () => { try { await sdk.shutdown() } catch {} })
}
