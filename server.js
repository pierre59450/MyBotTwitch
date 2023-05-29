const tmi = require('tmi.js');
require('dotenv').config();



const client = new tmi.Client({
    
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
    
    connection: {
      reconnect: true
    },
    channels: [
      'Captain_Pistache'
    ]
  });
  
  client.connect();

  client.on('message', async (channel, context, message) => {
    console.log('channel', {
      channel,
      user: context.username,
      message
    });



    const isNotBot = context.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME.toLowerCase();

    if ( isNotBot ) {
      client.say(channel, `Responding to ${context.username} message: ${message}`);
    }

  });