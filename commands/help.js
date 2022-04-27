const { SlashCommandBuilder } = require('@discordjs/builders');

const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Affiche l\'aide'),
	async execute(interaction) {
        const cmd_list = new MessageEmbed()
        //header
        .setColor('#800000')
        .setTitle("Liste des commandes")
        .setThumbnail('https://images.emojiterra.com/google/android-pie/512px/2699.png')

        //content
        .addFields(
            { name: 'help', value: "Affiche l'aide." },
            { name: 'donne_role', value: "Donne les rôles d'accès au serveur pour l'utilisateur sélectionné." },
            { name: 'delete_messages', value: "Supprime plusieurs messages d'un coup." },
            { name: 'pussy', value: "À utiliser uniquement si tu es en manque de poti chats." },
        )
        //footer
        .setFooter('dab')
		await interaction.reply({ embeds: [cmd_list] });
	},
};