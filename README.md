# Next Risk Calculator (Next.js + OpenTelemetry)

Migrated from a Vite + React project to **Next.js (App Router)** and instrumented for **OpenTelemetry** so you can export traces to **Grafana** (via OTLP).

## Dev
```bash
pnpm i   # or npm/yarn
pnpm dev
```
http://localhost:3000

## Deploy on Vercel
1. Push to a Git repo and Import in Vercel.
2. Set Environment Variables:
```
OTEL_SERVICE_NAME=next-risk-otel
OTEL_EXPORTER_OTLP_ENDPOINT=https://<your-otlp-gateway>/v1/traces
OTEL_EXPORTER_OTLP_HEADERS={"Authorization":"Bearer <token>"}
```
Grafana Cloud shows these in **OpenTelemetry** integration.

## Notes
- The home page is a **Client Component** (uses localStorage and hooks).
- Components are reused as-is. Tailwind content paths were updated and a missing `risk-extreme` color was added.
- Traces will be automatically generated for requests and route handlers.
