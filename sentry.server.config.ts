import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ead3a4fe15b2ffcf4a05de4ec9ba2827@o4510395295727616.ingest.us.sentry.io/4510395305295872",
  integrations: [
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs: true,
    }),
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],

  tracesSampleRate: 1.0,
  enableLogs: true,
  sendDefaultPii: true,
});
