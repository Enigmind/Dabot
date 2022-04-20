# Dab Bot
## Description :
Official Bot for Inglorium alliance on the game DOFUS.

## Requirements :
- NodeJS 16.6 or higher (https://nodejs.org/en/download/package-manager/)
- Docker (https://docs.docker.com/engine/install/) (optional, only for production purpose)
- Access to OpenAI API (create an account [here](https://beta.openai.com/signup)) (not used at the moment, it's for future features)

## Setup dev environment :
- clone the git repository : `git clone git@github.com:Enigmind/Escabot.git`
- install dependances : `npm install`
- rename the file `.env.example` to `.env`
- enter the CLIENT_ID in the `.env` (get it [here](https://discord.com/developpers))
- enter your bot GUILD_ID in the `.env` (copy it from discord client with dev options activated)
- enter your BOT_TOKEN in the `.env` (get it [here](https://discord.com/developpers))
- enter your bot OPEN_AI_KEY in the `.env` (get it [here](https://beta.openai.com/account/api-keys))
- deploy the commands into your server : `node deploy-commands.js`
- launch bot in terminal : `node dabot.js`
- write the help command in a discord channel : `/help`


## Prod :
- build the docker image : `docker build -t dabot .`

(if you wanna run the bot on a raspberry pi, change the base image in the dockerfile into `arm32v6/node:17-alpine`)

- run the container : `docker run -d dabot`
