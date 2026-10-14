import posthog from "posthog-js";

export function track(event: string, properties?: Record<string, unknown>) {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) posthog.capture(event, properties);
}
