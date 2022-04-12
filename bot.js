require('dotenv').config();
const Discord = require('discord.js');

const fs = require('fs');
const { OpusEncoder } = require('@discordjs/opus');
const { Client, Intents } = require('discord.js');
const client = new Client({
  ws: { intents: Intents.All },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

client.once('ready', () => {
  console.log('Ready!');
});

// This is the code for a bot making an intro on joining. However, I disabled it because its really annoying and repitive haha.

// let macIntro = true;

// client.on('voiceStateUpdate', async (state, state2) => {
//   // Plays audio of tony Tony Hologram for mac
//   if (state2.member.id === '140845637636718595') {
//     if (macIntro === true) {
//       if (state.selfMute === false && state2.selfMute == false) {
//         if (state.mute === false && state2.mute == false) {
//           if (state.deaf === false && state2.deaf == false) {
//             if (state.streaming === false && state2.streaming == false) {
//               if (state.selfVideo === false && state2.selfVideo == false) {
//                 await state2.channel
//                   .join()
//                   .then(connection => {
//                     const dispatcher = connection.play('tony.mp3', { volume: 0.3 }, { highWaterMark: 50 });
//                     dispatcher.on('finish', () => connection.disconnect());
//                   })
//                   .catch(e => {
//                     console.error(e);
//                   });
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// });

client.on('messageReactionAdd', async (reaction, user) => {
  // When a reaction is received, check if the structure is partial
  if (reaction.partial) {
    // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
    try {
      await reaction.fetch();
    } catch (error) {
      console.error('Something went wrong when fetching the message: ', error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
    if (reaction.emoji.name === '👎' && reaction.message.member.id === '276804557055721483') {
      console.log('if statemnet passed');
      reaction.message.channel.send('Good man yourself, keep downvoting Mark');
    } else {
    }
  }
});

client.on('message', async msg => {
  // all triggered by certain message conditions, and sometimes requiring a specific user to use it, such as mac turning off his intro play.
  if (msg.content === 'news') {
    // Put your message condition inside this string
    const newsArray = [
      'audio folder1/dublin-airport.mp3',
      'audio folder1/government-sponsors.mp3',
      'audio folder1/public-stonings.mp3',
      'audio folder1/rebel-stronghold.mp3',
    ]; // put your audio file(s) in here. if its just one then that will be picked always, if its multiple then its picked at random. Try to use mp3 or mp4 files.
    let random = Math.floor(Math.random() * newsArray.length);
    if (!msg.member.voice.channel) {
      msg.channel.send('Go into a channel to hear this meme.');
    } else {
      await msg.member.voice.channel
        .join()
        .then(connection => {
          const dispatcher = connection.play(newsArray[random], { volume: 0.3 }, { highWaterMark: 50 });
          dispatcher.on('finish', () => connection.disconnect());
        })
        .catch(e => {
          console.error(e);
        });
    }
  }

  // Copy and paste the below code from line 8 to 104 to create your own voice command!

  if (msg.content === '') {
    const newsArray = [''];
    let random = Math.floor(Math.random() * newsArray.length);
    if (!msg.member.voice.channel) {
      msg.channel.send('Go into a channel to hear this meme.');
    } else {
      await msg.member.voice.channel
        .join()
        .then(connection => {
          const dispatcher = connection.play(newsArray[random], { volume: 0.6 }, { highWaterMark: 50 });
          dispatcher.on('finish', () => connection.disconnect());
        })
        .catch(e => {
          console.error(e);
        });
    }
  }

  if (msg.content === 'menu') {
    let file;
    const random = Math.ceil(Math.random() * 100);
    if (random === 100) {
      file = 'audio folder1/menu3.mp3';
    } else if (random >= 90) {
      file = 'audio folder1/menu2.mp3';
    } else {
      file = 'audio folder1/menu1.mp3';
    }
    if (!msg.member.voice.channel) {
      msg.channel.send('Go into a channel to hear this meme.');
    } else {
      await msg.member.voice.channel
        .join()
        .then(connection => {
          const dispatcher = connection.play(file, { volume: 0.6 }, { highWaterMark: 50 });
          dispatcher.on('finish', () => connection.disconnect());
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
  if (msg.content) {

    let text1 = "audio folder1/";
    let text2 = msg.content;
    let result = text1.concat(text2);

      const audio = [result];

    if (!msg.member.voice.channel) {
      msg.channel.send('Go into a channel to hear this meme.');
    } else {
      await msg.member.voice.channel
        .join()
        .then(connection => {
          const dispatcher = connection.play(audio, { volume: 0.6 }, { highWaterMark: 50 });
          dispatcher.on('finish', () => connection.disconnect());
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
  
  if (msg.content === 'mac is sound') {
    // kicks member who types this string, if they're in a voice channel. Otherwise if statement doesnt get triggered.
    if (msg.member.voice.channel) {
      msg.member.voice.kick();
      msg.channel.send(`${msg.member.displayName} was kicked for saying something nice about mac.`);
    } else {
      msg.channel.send(`${msg.member.nickname} was kicked for saying something nice about mac.`);
    }
  }
});

client.on('message', async msg => {
  // Downvotes Mark
  if (msg.member.id === '276804557055721483') {
    msg.react('👎');
  }

  if (msg.member.id === '270185954789031936') {
    msg.react('🤡');
  }

  if (msg.member.id === '184793319014924289') {
    msg.react('🤡');
  }

  if (msg.member.id === '140845637636718595') {
    // Upvotes Mac
    msg.react('👍');
  }

  if (msg.member.id === '378702852786356224') {
    // Rat Emojis eddy
    msg.react('🐀');
  }

  if (msg.content === 'is edd a rat') {
    // simple string sent to channel on condition
    msg.channel.send('I see absolutely no difference between edd and Stuart Little');
  }

  if (msg.content === 'start intro' && msg.member.id === '140845637636718595') {
    // changes boolean which is required to play intro music, also sends a message with their username.
    macIntro = true;
    if (msg.member.nickname === null) {
      msg.channel.send(`${msg.member.displayName} has turned their intro on..`);
    } else {
      msg.channel.send(`${msg.member.nickname} has their intro on..`);
    }
  }

  if (msg.content === 'stop intro' && msg.member.id === '140845637636718595') {
    macIntro = false;
    if (msg.member.nickname === null) {
      msg.channel.send(`${msg.member.displayName} has their intro turned off.`);
    } else {
      msg.channel.send(`${msg.member.nickname} has their intro turned off.`);
    }
  }

  if (msg.content === 'is bray a shithole') {
    msg.channel.send('yes, bray is shit.');
  }
});

client.login(process.env.BOT_TOKEN);
