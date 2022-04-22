const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("donne_role")
    .setDescription(
      "Donne les rôles d'accès au serveur pour l'utilisateur sélectionné."
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("invité")
        .setDescription("Si la personne souhaite rejoindre en tant qu'invité.")
        .addMentionableOption((option) =>
          option
            .setName("utilisateur")
            .setDescription("À qui faut-il ajouter les rôles ?")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("pseudo")
            .setDescription("Son pseudo sur Dofus")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("membre")
        .setDescription("Si il s'agit d'un membre de ta guilde")
        .addMentionableOption((option) =>
          option
            .setName("utilisateur")
            .setDescription("À qui faut-il ajouter les rôles ?")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("pseudo")
            .setDescription("Son pseudo sur Dofus")
            .setRequired(true)
        )
        .addRoleOption((option) =>
          option
            .setName("guilde")
            .setDescription("Dans quelle guilde est-il ?")
            .setRequired(true)
        )
        .addBooleanOption((option) =>
          option
            .setName("bras_droit")
            .setDescription("Est-ce un de tes bras droits ?")
        )
    ),

  async execute(interaction) {
    const meneur_instance = interaction.member;
    var response = {
      content: "",
      ephemeral: true,
    };

    if (interaction.options.getSubcommand() === "membre") {
      const user = interaction.options.getMentionable("utilisateur");
      const pseudo = interaction.options.getString("pseudo");
      const guilde = interaction.options.getRole("guilde");
      const bd = interaction.options.getBoolean("bras_droit");
      const general_channel = client.channels.cache.get('964905956876091522');
      const arm_role = interaction.guild.roles.cache.find(
        (r) => r.id === "964904219532460032"
      );
      const member_role = interaction.guild.roles.cache.find(
        (r) => r.id === "964904680079654923"
      );

      var role = "membre"

      if (meneur_instance.roles.cache.has(guilde.id)) {
        user.roles.add(guilde);
        user.roles.add(member_role)
        user.setNickname(pseudo)
        if (bd){
          role = "bras droit"
          user.roles.add(arm_role)
        }
        response.content = "Les rôles ont été correctement ajoutés !"

        // welcome message in #general
        general_channel.send("Bienvenue à <@" + user.id + ">, " + role + " de " + guilde.name + " qui vient de nous rejoindre !")

      } else {
        response.content = "Tu n'es pas le meneur de " + user.user.username + ". Tu ne peux ajouter des rôles qu'aux membres de ta propre guilde."
      }
    } else if (interaction.options.getSubcommand() === "invité") {
      const user = interaction.options.getMentionable("utilisateur");
      const pseudo = interaction.options.getString("pseudo");
      const general_channel = client.channels.cache.get('964905956876091522');
      const guest_role = interaction.guild.roles.cache.find(
        (r) => r.id === "965656853797298237"
      );

      user.roles.add(guest_role);
      user.setNickname(pseudo)
      response.content = "Les rôles ont été correctement ajoutés !"

      // welcome message in #general
      general_channel.send("Bienvenue à <@" + user.id + ">, qui vient de nous rejoindre en tant qu'invité !")
    }

    interaction.reply(response);
  },
};
