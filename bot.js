require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.once('ready', () => {
  console.log('Ready!!!');
});



client.on('voiceStateUpdate', async (state, state2) => {
  if (state2.member.id === '140845637636718595') {
    console.log('joined', state2.channel);
    const connection = await state2.channel.join();
    const dispatcher = connection.play(
      'https://www.mboxdrive.com/hal%20(1).mp3'
    );
    dispatcher.on('finish', () => state2.channel.leave());
    console.log('audio played');
   
  } else {
    console.log('Left vc');
  }
});

client.login(process.env.BOT_TOKEN);
