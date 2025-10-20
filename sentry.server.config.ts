import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://d9e260b90539b0a660f7f8b18af023cb@o4509592284954624.ingest.de.sentry.io/4509977442189392",
  replaysSessionSampleRate: 0.0,
  tracesSampleRate: 0.1,
  enableLogs: true,
  integrations: [],
  debug: false,
});
