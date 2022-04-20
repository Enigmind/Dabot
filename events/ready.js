module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		// client.channels.cache.get('963435756947382344').send('test message');
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'Dofus' }] });
	},
};