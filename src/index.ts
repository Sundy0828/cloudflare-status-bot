import { Client, Message } from "discord.js";
import { config } from "./config";

import { monitorCommand } from "./commands/monitor";
import { unmonitorCommand } from "./commands/unmonitor";
import { viewMonitoredCommand } from "./commands/viewmonitored";
import { helpCommand } from "./commands/help";
import { Commands } from "./commands";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", async (message: Message) => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  const { DISCORD_PREFIX } = config;

  // Check if the message starts with the defined prefix
  if (!message.content.startsWith(DISCORD_PREFIX)) return;

  // Extract the command without the prefix
  const command = message.content.slice(DISCORD_PREFIX.length).split(" ")[0];

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
      // Handle unknown commands or do nothing
      break;
  }
});

client.login(config.DISCORD_TOKEN);
