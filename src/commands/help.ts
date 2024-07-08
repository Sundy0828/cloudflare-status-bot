import { Message } from "discord.js";

export function helpCommand(message: Message): void {
  const helpMessage = `
**Bot Commands:**
\`!monitor SITE_URL [CHANNEL_ID...]\` - Start monitoring the specified site. If no channel IDs are provided, it will prompt to use the current channel.
\`!unmonitor SITE_URL [CHANNEL_ID...]\` - Stop monitoring the specified site. If no channel IDs are provided, it will use the current channel.
\`!viewmonitored\` - View all currently monitored sites and their associated channels.
\`!help\` - Display this help message.
**Examples:**
\`!monitor https://example.com\` - Monitors https://example.com for the current channel.
\`!monitor https://example.com 123456789012345678\` - Monitors https://example.com for the channel with ID 123456789012345678.
\`!monitor https://example.com 123456789012345678 987654321098765432\` - Monitors https://example.com for the channels with IDs 123456789012345678 and 987654321098765432.
\`!unmonitor https://example.com\` - Stops monitoring https://example.com for the current channel.
\`!unmonitor https://example.com 123456789012345678\` - Stops monitoring https://example.com for the channel with ID 123456789012345678.
\`!viewmonitored\` - Lists all monitored sites and their associated channels.
**Notes:**
- The bot will check the Cloudflare status every 60 seconds.
- When Cloudflare is down, monitored channels will be disabled, and a message will be sent.
- Channels will be re-enabled once Cloudflare and the monitored site are back up.
- Ensure the bot has the \`MANAGE_CHANNELS\` and \`SEND_MESSAGES\` permissions.
`;

  message.channel.send(helpMessage);
}