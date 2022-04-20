// Need to work on it while Esca in production is sleeping
module.exports = {
	name: 'guildMemberRemove',
	execute(member) {
		console.log(`Membre ejecté : ${member.user.username}`)
	},
};