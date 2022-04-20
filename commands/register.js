const { SlashCommandBuilder } = require("@discordjs/builders");

const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Permet de t'enregistrer sur le discord.")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("invité")
        .setDescription("Si tu es un invité mais pas membre de PRAY")
        .addStringOption((option) =>
          option
            .setName("pseudo")
            .setDescription("Ton pseudo Sur Dofus")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("membre")
        .setDescription("Si tu es membre de l'alliance")
        .addStringOption((option) =>
          option
            .setName("pseudo")
            .setDescription("Ton pseudo Sur Dofus")
            .setRequired(true)
        )
        .addRoleOption((option) =>
          option
            .setName("guild")
            .setDescription("Dans quelle guilde es-tu ?")
            .setRequired(true)
        )
        .addBooleanOption((option) =>
          option.setName("bras_droit").setDescription("Es-tu bras droit ?")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("candidat")
        .setDescription("Si ta guilde postule pour intégrer l'alliance")
        .addStringOption((option) =>
          option
            .setName("pseudo")
            .setDescription("Ton pseudo Sur Dofus")
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const newcomer_name_IG = interaction.options.getString("pseudo");
    const newcomer_instance = interaction.member;
    var rang = "";
    var response = {
      content: "",
      components: [],
      ephemeral: false,
    };

    //buttons instances
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("accept")
        .setLabel("Valider")
        .setStyle("SUCCESS"),
      new MessageButton()
        .setCustomId("decline")
        .setLabel("Refuser")
        .setStyle("DANGER")
    );

    if (interaction.options.getSubcommand() === "membre") {
      const guild = interaction.options.getRole("guild");
      if (interaction.options.getBoolean("bras_droit") == true) {
        rang = "bras droit";
      } else {
        rang = "simple membre";
      }
      (response.content =
        newcomer_name_IG +
        " de la guilde <@&" +
        guild +
        "> demande l'accès au discord en tant que " +
        rang),
        response.components = [row]
        await interaction.reply(response);
    } else if (interaction.options.getSubcommand() === "invité") {
      rang = "invité";
      (response.content =
        newcomer_name_IG +
        " demande l'accès au discord en tant que " +
        rang)
      response.components = [row]
      await interaction.reply(response)
    } else if (interaction.options.getSubcommand() === "candidat") {
      rang = "candidat";
      (response.content =
        newcomer_name_IG +
        " demande l'accès au discord en tant que " +
        rang)
      response.components = [row]
      await interaction.reply(response)
    }
  },
};
