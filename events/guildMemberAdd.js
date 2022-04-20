// Need to work on it while Esca in production is sleeping
module.exports = {
	name: 'guildMemberAdd',
	execute(member) {
		console.log(`Nouvelle entrée sur le serveur : ${member.user.username}`)
	},
};