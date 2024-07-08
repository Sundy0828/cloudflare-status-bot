import { Message } from "discord.js";
import { getBaseUrl } from "../utils/cloudflare";

const monitoredChannels: { [channelId: string]: string[] } = {};

export async function monitorCommand(message: Message): Promise<void> {
  const args = message.content.split(" ");
  const siteUrl = args[1];
  const channelIds = args.slice(2);

  if (!siteUrl) {
    await message.reply("Please provide a site URL to monitor.");
    return;
  }

  const baseSiteUrl = getBaseUrl(siteUrl);
  if (isBaseUrlMonitored(baseSiteUrl, channelIds)) {
    await message.reply(
      `A site with the base URL ${baseSiteUrl} is already being monitored in one of the specified channels.`
    );
    return;
  }

  if (channelIds.length === 0) {
    await confirmChannelUsage(message, siteUrl);
  } else {
    monitorChannels(channelIds, baseSiteUrl, message);
  }
}

async function confirmChannelUsage(
  message: Message,
  siteUrl: string
): Promise<void> {
  const filter = (response: Message) =>
    response.author.id === message.author.id;
  await message.reply(
    "No channel ID provided. Do you want to use this channel? (yes/no)"
  );
  try {
    const collected = await message.channel.awaitMessages({
      filter,
      max: 1,
      time: 15000,
      errors: ["time"],
    });
    const response = collected.first()?.content.toLowerCase();
    if (response === "yes" || response === "y") {
      monitorChannels([message.channel.id], getBaseUrl(siteUrl), message);
    } else {
      message.reply("Monitoring request canceled.");
    }
  } catch (error) {
    message.reply("No response received. Monitoring request canceled.");
  }
}

function monitorChannels(
  channelIds: string[],
  baseSiteUrl: string,
  message: Message
): void {
  for (const channelId of channelIds) {
    if (!monitoredChannels[channelId]) {
      monitoredChannels[channelId] = [];
    }
    monitoredChannels[channelId].push(baseSiteUrl);
  }
  message.reply(
    `Monitoring ${baseSiteUrl} for channels: ${channelIds
      .map((id) => `<#${id}>`)
      .join(", ")}.`
  );
}

function isBaseUrlMonitored(
  baseSiteUrl: string,
  channelIds: string[]
): boolean {
  return channelIds.some((channelId) => {
    return (
      monitoredChannels[channelId] &&
      monitoredChannels[channelId].some(
        (url) => getBaseUrl(url) === baseSiteUrl
      )
    );
  });
}
