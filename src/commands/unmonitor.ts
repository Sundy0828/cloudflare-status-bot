import { Message } from "discord.js";
import { getBaseUrl } from "../utils/cloudflare";

const monitoredChannels: { [channelId: string]: string[] } = {};

export function unmonitorCommand(message: Message): void {
  const args = message.content.split(" ");
  const siteUrl = args[1];
  const channelIds = args.slice(2);

  if (!siteUrl) {
    message.reply("Please provide a site URL to stop monitoring.");
    return;
  }

  const baseSiteUrl = getBaseUrl(siteUrl);
  const channelsToUnmonitor =
    channelIds.length > 0 ? channelIds : [message.channel.id];

  for (const channelId of channelsToUnmonitor) {
    if (monitoredChannels[channelId]) {
      monitoredChannels[channelId] = monitoredChannels[channelId].filter(
        (url) => getBaseUrl(url) !== baseSiteUrl
      );
      if (monitoredChannels[channelId].length === 0) {
        delete monitoredChannels[channelId];
      }
    }
  }

  message.reply(
    `Stopped monitoring ${baseSiteUrl} for channels: ${channelsToUnmonitor
      .map((id) => `<#${id}>`)
      .join(", ")}.`
  );
}
