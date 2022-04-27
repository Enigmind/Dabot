const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("delete_messages")
    .setDescription("Supprime plusieurs messages d'un coup.")
    .addIntegerOption((option) =>
      option
        .setName("nb_messages")
        .setDescription("Combien de message veux-tu supprimer ? (max 100)")
        .setRequired(true)
    ),
  async execute(interaction) {
    var nb_messages = interaction.options.getInteger("nb_messages");
    var member = interaction.member;
    var channel = interaction.channel;
    var response = {
      content: "",
      ephemeral: true,
    };
    if (member.permissions.has("MANAGE_MESSAGES")) {
      channel
        .bulkDelete(nb_messages)
        .then((messages) =>
          nb_messages = messages
        )
        .catch(console.error);
      response.content = nb_messages + " messages ont été supprimés."
    } else {
      response.content = "Tu n'as pas le droit de faire ça petit fripon. Que je ne t'y reprenne pas."
    }

    await interaction.reply(response)
  },
};
