import { Message } from "discord.js";

const monitoredChannels: { [channelId: string]: string[] } = {};

export function viewMonitoredCommand(message: Message): void {
  if (Object.keys(monitoredChannels).length === 0) {
    message.channel.send("No sites are currently being monitored.");
    return;
  }

  let monitoredMessage = "**Currently Monitored Sites and Channels:**\n";
  for (const [channelId, siteUrls] of Object.entries(monitoredChannels)) {
    const channelMention = `<#${channelId}>`;
    monitoredMessage += `${channelMention}:\n`;
    siteUrls.forEach((url) => {
      monitoredMessage += `  - ${url}\n`;
    });
  }

  message.channel.send(monitoredMessage);
}
