import { registerOTel } from '@vercel/otel'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'

export function register() {
  const exporter = new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,  // e.g. https://otlp-gateway:4318/v1/traces
    headers: process.env.OTEL_EXPORTER_OTLP_HEADERS
      ? JSON.parse(process.env.OTEL_EXPORTER_OTLP_HEADERS)
      : undefined,
  })

  registerOTel({
    serviceName: process.env.OTEL_SERVICE_NAME ?? 'next-risk-otel',
    traceExporter: exporter,
  })
}
