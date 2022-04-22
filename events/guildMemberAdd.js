// Trigger when a new user joins a server
module.exports = {
	name: 'guildMemberAdd',
	execute(member) {
		console.log(`Nouvelle entrée sur le serveur : ${member.user.username}`)
	},
};