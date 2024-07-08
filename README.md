# Discord Cloudflare Monitor Bot (cloudflare-status-bot)

![GitHub repo size](https://img.shields.io/github/repo-size/Sundy0828/cloudflare-status-bot)
![GitHub contributors](https://img.shields.io/github/contributors/Sundy0828/cloudflare-status-bot)
![GitHub stars](https://img.shields.io/github/stars/Sundy0828/cloudflare-status-bot?style=social)
![GitHub forks](https://img.shields.io/github/forks/Sundy0828/cloudflare-status-bot?style=social)

This Discord bot monitors the status of Cloudflare and manages channels where the status of specific websites using Cloudflare is reported. It periodically checks the Cloudflare status and notifies designated Discord channels when Cloudflare is down or when monitored websites are affected. Admins can configure the bot to monitor specific websites across different Discord channels, ensuring timely notifications and management during service disruptions.

## Features

- Monitor Cloudflare status and notify Discord channels when Cloudflare is down.
- Manage multiple websites across different Discord channels.
- Enable/disable channels based on Cloudflare status and monitored website health.
- Command-based interface for easy configuration and monitoring.

## Installation

To install and run the bot locally:

1. Clone this repository: `git clone https://github.com/Sundy0828/cloudflare-status-bot.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based on the `.env.example` file.
4. Configure your Discord bot token and other settings in the `.env` file.
5. Start the bot: `npm start`

## Creating a New Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Click on "New Application."
3. Enter a name for your application and click "Create."
4. Navigate to the "Bot" tab and click "Add Bot."
5. Click "Yes, do it!" to confirm.
6. Customize your bot (e.g., icon, username) if desired.
7. Under the "Token" section, click "Copy" to copy your bot token. Save it somewhere safe.
8. Enable the following permissions under the "Privileged Gateway Intents" section:
   - Message Content Intent

### Adding the Bot to Your Server

1. Navigate to the "OAuth2" tab, then "URL Generator."
2. In "Scopes," select `bot` and `applications.commands`.
3. In "Bot Permissions," select the required permissions:
   - `View Channels`
   - `Send Messages`
   - `Manage Channels`
   - `Embed Links`
   - `Read Message History`
   - `Add Reactions`
   - `Use External Emojis`
   - `Attach Files`
   - `Use Application Commands`
4. Copy the generated URL, which will look like this: `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2147863632&integration_type=0&scope=bot+applications.commands`
5. Replace `YOUR_CLIENT_ID` with your application's client ID.
6. Paste the URL into your browser and select the server where you want to add the bot.
7. Click "Authorize" and complete any CAPTCHA prompts.

## Usage

- `!monitor SITE_URL [CHANNEL_ID...]`: Start monitoring the specified site. If no channel IDs are provided, it will prompt to use the current channel.
- `!unmonitor SITE_URL [CHANNEL_ID...]`: Stop monitoring the specified site. If no channel IDs are provided, it will use the current channel.
- `!viewmonitored`: View all currently monitored sites and their associated channels.
- `!help`: Display bot commands and usage information.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

- Discord: sundy0828#3927
- Email: jerrod.sunderland@gmail.com
- GitHub: [Sundy0828](https://github.com/Sundy0828)

Feel free to reach out for any questions or suggestions!
