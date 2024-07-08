# Discord Cloudflare Monitor Bot (CloudflareStatusBot)

![GitHub repo size](https://img.shields.io/github/repo-size/Sundy0828/CloudflareStatusBot)
![GitHub contributors](https://img.shields.io/github/contributors/Sundy0828/CloudflareStatusBot)
![GitHub stars](https://img.shields.io/github/stars/Sundy0828/CloudflareStatusBot?style=social)
![GitHub forks](https://img.shields.io/github/forks/Sundy0828/CloudflareStatusBot?style=social)

This Discord bot monitors the status of Cloudflare and manages channels where the status of specific websites using Cloudflare is reported. It periodically checks the Cloudflare status and notifies designated Discord channels when Cloudflare is down or when monitored websites are affected. Admins can configure the bot to monitor specific websites across different Discord channels, ensuring timely notifications and management during service disruptions.

## Features

- Monitor Cloudflare status and notify Discord channels when Cloudflare is down.
- Manage multiple websites across different Discord channels.
- Enable/disable channels based on Cloudflare status and monitored website health.
- Command-based interface for easy configuration and monitoring.

## Installation

To install and run the bot locally:

1. Clone this repository: `git clone https://github.com/Sundy0828/CloudflareStatusBot.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based off of the .env.example file.
4. Configure your Discord bot token and other settings in `index.ts`.
5. Start the bot: `npm start`

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
