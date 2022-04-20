const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pussy")
    .setDescription("à utiliser seulement si t'es en manque de poti chat."),
  async execute(interaction) {
    await interaction.deferReply();
    const { file } = await fetch("https://aws.random.cat/meow").then(
      (response) => response.json()
    );
    interaction.editReply({ files: [file] });
  },
};
