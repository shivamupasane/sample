const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
client.on('message', message => {
	console.log(message.body);
});
client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});
client.on('message', async msg => {
    if(msg.hasMedia) {
        const media = await msg.downloadMedia();
        // do something with the media data here
    }
});
client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
