import { Client, Message, GatewayIntentBits } from "discord.js";
import { config } from "./config";

import { monitorCommand } from "./commands/monitor";
import { unmonitorCommand } from "./commands/unmonitor";
import { viewMonitoredCommand } from "./commands/viewmonitored";
import { helpCommand } from "./commands/help";
import { Commands } from "./commands";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", async (message: Message) => {
  const { DISCORD_PREFIX } = config;

  // Check if the message starts with the defined prefix or Ignore messages from the bot itself
  if (!message.content.startsWith(DISCORD_PREFIX) || message.author.bot) return;

  // Extract the command without the prefix
  const args = message.content
    .slice(config.DISCORD_PREFIX.length)
    .trim()
    .split(/ +/);
  const command = args.shift()?.toLowerCase();

  switch (command) {
    case Commands.MONITOR:
      await monitorCommand(message);
      break;
    case Commands.UNMONITOR:
      await unmonitorCommand(message);
      break;
    case Commands.VIEW_MONITORED:
      await viewMonitoredCommand(message);
      break;
    case Commands.HELP:
      await helpCommand(message);
      break;
    default:
      message.reply(
        `Unknown command. Use "${DISCORD_PREFIX}${Commands.HELP}" to see available commands.`
      );
      break;
  }
});

client.login(config.DISCORD_TOKEN);
