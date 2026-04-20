import type { TelemetryConfig } from "./types.js";

export function resolveTelemetryConfig(fileConfig?: { enabled?: boolean }): TelemetryConfig {
  if (fileConfig?.enabled === true) {
    const endpoint = process.env.PAPERCLIP_TELEMETRY_ENDPOINT || undefined;
    return { enabled: true, endpoint };
  }
  return { enabled: false };
}