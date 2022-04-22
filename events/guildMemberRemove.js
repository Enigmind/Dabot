// Trigger when a member leaves a server
module.exports = {
	name: 'guildMemberRemove',
	execute(member) {
		console.log(`Membre ejecté : ${member.user.username}`)
	},
};