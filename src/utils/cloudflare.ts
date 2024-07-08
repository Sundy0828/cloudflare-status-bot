import fetch from "node-fetch";
import { URL } from "url";

const cloudflareStatusUrl =
  "https://www.cloudflarestatus.com/api/v2/status.json";

export async function checkCloudflareStatus(): Promise<boolean> {
  try {
    const response = await fetch(cloudflareStatusUrl);
    const data = await response.json();
    return data.status.indicator !== "none";
  } catch (error) {
    console.error("Error fetching Cloudflare status:", error);
    return false;
  }
}

export function getBaseUrl(siteUrl: string): string {
  try {
    const parsedUrl = new URL(siteUrl);
    return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
  } catch (error) {
    console.error(`Invalid URL provided: ${siteUrl}`);
    return siteUrl; // Return as is if URL is invalid
  }
}