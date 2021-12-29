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
    const newsArray = ['audio folder/dublin-airport.mp3', 'audio folder/government-sponsors.mp3', 'audio folder/public-stonings.mp3', 'audio folder/rebel-stronghold.mp3']; // put your audio file(s) in here. if its just one then that will be picked always, if its multiple then its picked at random. Try to use mp3 or mp4 files.
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
    const random = Math.ceil(Math.random()*100);
    if (random === 100) {
      file = 'audio folder/menu3.mp3';
    } else if (random >= 90) {
      file = 'audio folder/menu2.mp3';
    } else {
      file = 'audio folder/menu1.mp3';
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

  if (msg.content === 'breyers') {
    const newsArray = ['audio folder/byriers.mp4'];
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

  if (msg.content === 'asnee') {
    const newsArray = ['audio folder/asnee.mp3'];
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

  if (msg.content === 'big shaq') {
    const newsArray = ['audio folder/bigshaq.mp3'];
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

  if (msg.content === 'starving') {
    const newsArray = ['audio folder/starving (1).mp3'];
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
  1;

  if (msg.content === 'legs') {
    const newsArray = ['audio folder/legs (1).mp3'];
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

  if (msg.content === 'borat') {
    const newsArray = ['audio folder/borat.mp3'];
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

  if (msg.content === 'divorce') {
    const newsArray = ['audio folder/divorce-short.mp3'];
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

  if (msg.content === 'sassy') {
    const newsArray = ['audio folder/sassy1.mp3'];
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

  if (msg.content === 'donkey') {
    const newsArray = ['audio folder/donkey.mp3'];
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

  if (msg.content === 'ey boss') {
    const newsArray = ['audio folder/eyboss.mp3'];
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

  if (msg.content === 'pretty good') {
    const newsArray = ['audio folder/prettygood.mp3'];
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

  if (msg.content === 'lesson') {
    const newsArray = ['audio folder/lesson.mp3'];
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

  if (msg.content === 'nice') {
    const newsArray = ['audio folder/nice.mp3'];
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

  if (msg.content === 'smellz') {
    const newsArray = ['audio folder/smellz1.mp3'];
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

  if (msg.content === 'weans') {
    const newsArray = ['audio folder/weans.mp3'];
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

  if (msg.content === 'bono') {
    const newsArray = ['audio folder/bono.mp4'];
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

  if (msg.content === 'steak') {
    const newsArray = ['audio folder/steak.mp3'];
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

  if (msg.content === 'mr freeze') {
    const newsArray = ['audio folder/mrfreeze.mp4'];
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

  if (msg.content === 'street') {
    const newsArray = ['audio folder/street.mp3'];
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

  if (msg.content === 'smellz long') {
    const newsArray = ['audio folder/smellz2.mp3', 'audio folder/smellz3.mp3'];
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

  if (msg.content === 'carlton') {
    const newsArray = ['audio folder/carlton.mp3'];
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

  if (msg.content === 'edd scream') {
    const newsArray = ['audio folder/Edscream.mp3'];
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

  if (msg.content === 'get a knife') {
    const newsArray = ['audio folder/getanknife.mp3'];
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

  if (msg.content === 'joey') {
    const newsArray = ['audio folder/joey.mp3'];
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

  if (msg.content === 'penis') {
    const newsArray = ['audio folder/penis.mp3'];
    let random = Math.floor(Math.random() * newsArray.length);
    if (!msg.member.voice.channel) {
      msg.channel.send('Go into a channel to hear this meme.');
    } else {
      await msg.member.voice.channel
        .join()
        .then(connection => {
          const dispatcher = connection.play(newsArray[random], { volume: 0.9 }, { highWaterMark: 50 });
          dispatcher.on('finish', () => connection.disconnect());
        })
        .catch(e => {
          console.error(e);
        });
    }
  }

  if (msg.content === 'please') {
    const newsArray = ['audio folder/please.mp3'];
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

  if (msg.content === 'quick maths') {
    const newsArray = ['audio folder/quickmafs.mp3'];
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

  if (msg.content === 'sun priest') {
    const newsArray = ['audio folder/TheSunPriest.mp3'];
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
        })
    }
  }

  if (msg.content === 'viper') {
    const newsArray = ['audio folder/theviper2.mp3', 'audio folder/theviper3.mp3'];
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

  if (msg.content === 'viper long') {
    const newsArray = ['audio folder/TheViper.mp3'];
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

  if (msg.content === 'cold snap') {
    const newsArray = ['audio folder/cold snap.mp4'];
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

  if (msg.content === 'lads') {
    const newsArray = ['audio folder/LADS.mp3'];
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

  if (msg.content === 'lads long') {
    const newsArray = ['audio folder/ladsfull.mp3'];
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

  if (msg.content === 'shut up') {
    const newsArray = ['audio folder/mac shut up.mp3'];
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

  if (msg.content === 'egg') {
    const newsArray = ['audio folder/egg.mp3'];
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

  if (msg.content === 'heffo') {
    const newsArray = ['audio folder/heffo.mp3'];
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

  if (msg.content === 'say again?') {
    const newsArray = ['audio folder/say-again.mp3'];
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

  if (msg.content === 'catjam') {
    const newsArray = ['audio folder/cat jam original.mp3'];
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

  

  if (msg.content === 'potion seller') {
    const newsArray = ['audio folder/strong-potion.mp4', 'audio folder/potions.mp4'];
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

  if (msg.content === 'dorty curry') {
    const newsArray = ['audio folder/dortycorry1.mp3', 'audio folder/dortycorry2.mp3'];
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

  if (msg.content === 'autism') {
    const newsArray = ['audio folder/autism.mp4'];
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

  if (msg.content === 'poopy') {
    const newsArray = ['audio folder/poopy.mp4'];
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

  if (msg.content === 'miranda') {
    const newsArray = ['audio folder/miranda.mp4'];
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
