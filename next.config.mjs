// // import { withSentryConfig } from "@sentry/nextjs";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Add any other Next.js configurations here
// };

// // const sentryConfig = {
// //   silent: true,
// //   org: "mosi-tp",
// //   project: "portfolio-nextjs",
// //   widenClientFileUpload: true,
// //   transpileClientSDK: true,
// //   hideSourceMaps: true,
// //   disableLogger: true,
// //   automaticVercelMonitors: true,
// // };

// // export default withSentryConfig(nextConfig, sentryConfig);
// export default nextConfig;

import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  // your other Next.js configurations
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: "mosi-tp",
  project: "portfolio-nextjs",
});
