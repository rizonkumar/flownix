import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default withSentryConfig(nextConfig, {
  org: "personal-f99",

  project: "flownix",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  tunnelRoute: "/monitoring",

  disableLogger: true,

  automaticVercelMonitors: true,
});
