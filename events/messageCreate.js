// Trigger when someone write a message in a channel
const OpenAI = require("openai-api");
require("dotenv").config();
const openAI_key = process.env.OPEN_AI_KEY
const openai = new OpenAI(openAI_key);

// when a message is sent in a channel
module.exports = {
  name: "messageCreate",
  execute(message) {

    // prevent the bot to respond to itself
    if (message.author == client.user) return;

    //TODO: create a personnality to the bot (hi openAI)
    
  },
};
