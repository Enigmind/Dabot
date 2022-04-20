// when a message is sent in a channel
module.exports = {
	name: 'messageCreate',
	execute(message) {
		// Ignore direct messages
		if (!message.guild) return;
		//TODO: do some things (like log) with deleted messages.
	},
};