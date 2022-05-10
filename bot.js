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

let macIntro = true;

client.on('voiceStateUpdate', async (state, state2) => {
  // Plays audio of tony Tony Hologram for mac
  if (state2.member.id === '295912051984039936') {
    if (macIntro === true) {
      if (state.selfMute === false && state2.selfMute == false) {
        if (state.mute === false && state2.mute == false) {
          if (state.deaf === false && state2.deaf == false) {
            if (state.streaming === false && state2.streaming == false) {
              if (state.selfVideo === false && state2.selfVideo == false) {
                await state2.channel
                  .join()
                  .then(connection => {
                    const dispatcher = connection.play('audio folder1/porn.mp3', { volume: 0.5 }, { highWaterMark: 50 });
                    dispatcher.on('finish', () => connection.disconnect());
                  })
                  .catch(e => {
                    console.error(e);
                  });
              }
            }
          }
        }
      }
    }
  }
});

const memes = new Map([
  ['anime', { fileNames: ['anime.mp3'] }],
  ['ara ara', { fileNames: ['ara ara.mp3'], volume: 0.9 }],
  ['ahh', { fileNames: ['ahh.mp3'], volume: 0.9 }],
  ['airpods', { fileNames: ['airpods.mp3'], volume: 0.9 }],
  ['arkbar', { fileNames: ['arkbar.mp3'] }],
  ['asnee', { fileNames: ['asnee.mp3'] }],
  ['asian people', { fileNames: ['asian people.mp3'], volume: 0.9 }],
  ['autism', { fileNames: ['autism.mp4'] }],
  ['bear patrol', { fileNames: ['bear patrol.mp3'] }],
  ['bender', { fileNames: ['bender.mp3'] }],
  ['bigshaq', { fileNames: ['bigshaq.mp3'] }],
  ['bono', { fileNames: ['bono.mp3'] }],
  ['borat', { fileNames: ['borat.mp3'] }],
  ['buklau', { fileNames: ['buklau.mp3', 'buklau2.mp3', 'buklau3.mp3'] }],
  ['breyers', { fileNames: ['byriers.mp3'] }],
  ['call to prayer', { fileNames: ['call to prayer.mp3'], volume: 0.2 }],
  ['carlton', { fileNames: ['carlton.mp3'] }],
  ['cat jam', { fileNames: ['cat jam original.mp3'] }],
  ['chum drum', { fileNames: ['chum_drum_bedrum_-4353029994025334169.mp3'] }],
  ['coke', { fileNames: ['coke.mp3'] }],
  ['cold snap', { fileNames: ['cold snap.mp3'] }],
  ['crab rave', { fileNames: ['crab_rave_sound_effect_84840729185338176.mp3'] }],
  ['croissant', { fileNames: ['carl_wheezer_croissant_2900525901889400232.mp3'] }],
  ['dat boi', { fileNames: ['datboi.mp3'], volume: 0.9 }],
  ['democracy', { fileNames: ['democracy.mp3'], volume: 0.9 }],
  ['dinkster', { fileNames: ['somebody_ring_the_dinkster_-2919279323241905165.mp3'] }],
  ['divorce cute', { fileNames: ['divorce-cute.mp3'] }],
  ['divorce short', { fileNames: ['divroce-short.mp3'] }],
  ['donkey', { fileNames: ['donkey.mp3'] }],
  ['dortycorry', { fileNames: ['dortycorry1.mp3', 'dortycorry2.mp3'] }],
  ['ed scream', { fileNames: ['Edscream.mp3'] }],
  ['egg', { fileNames: ['egg.mp3'] }],
  ['eyboss', { fileNames: ['eyboss.mp3'] }],
  ['foksmash', { fileNames: ['foksmash.mp3'] }],
  ['getaknife', { fileNames: ['getaknife.mp3'] }],
  [
    'news',
    {
      fileNames: ['government-sponsors.mp3', 'dublin-airport.mp3', 'public-stonings.mp3', 'rebel-stronghold.mp3'],
    },
  ],
  ['hairy', { fileNames: ['hairy.mp3'], volume: 0.9 }],
  ['hal', { fileNames: ['hal.mp3'] }],
  ['halo', { fileNames: ['halo.mp3'], volume: 0.9 }],
  ['halo theme', { fileNames: ['halo theme.mp3'], volume: 0.4 }],
  ['harry', { fileNames: ['harry1.mp3', 'harry2.mp3'] }],
  ['heffo', { fileNames: ['heffo.mp3'] }],
  ['horseplay', { fileNames: ['horseplay.mp3'], volume: 0.9  }],
  ['im taking a shit', { fileNames: ['please_get_out_im_taking_a_shit_-606515860420089524.mp3'] }],
  ['joey', { fileNames: ['joey.mp3'] }],
  ['judo', { fileNames: ['judo.mp3'], volume: 0.9 }],
  ['divorce', { fileNames: ['John-I-want-Divorce.mp3'] }],
  ['konichiwa', { fileNames: ['konichiwa.mp3'], volume: 0.9 }],
  ['knifey', { fileNames: ['knifey.mp3'] }],
  ['knuckes', { fileNames: ['knuckles1.mp3', 'knuckles2.mp3'] }],
  ['lads', { fileNames: ['LADS.mp3'] }],
  ['ladsfull', { fileNames: ['ladsfull.mp3'] }],
  ['limp', { fileNames: ['limp.mp3'], volume: 0.9 }],
  ['legs', { fileNames: ['legs (1).mp3'] }],
  ['lesson', { fileNames: ['lesson.mp3'] }],
  ['lie detector', { fileNames: ['lie detector.mp3'] }],
  ['lovely', { fileNames: ['lovely.mp3', 'lovely2.mp3'] }],
  ['mac shut up', { fileNames: ['mac shut up.mp3'], volume: 1.8 }],
  ['milkman', { fileNames: ['milkman.mp3'], volume: 0.9 }],
  ['my penis', { fileNames: ['mypenis.mp3'], volume: 0.6 }],
  ['menu', { fileNames: ['menu1.mp3, menu2.mp3, menu3.mp3'] }],
  ['miranda', { fileNames: ['miranda.mp3'] }],
  ['mr freeze', { fileNames: ['mr freeze.mp3', 'mrfreeze.mp3'] }],
  ['muck', { fileNames: ['muck.mp3'] }],
  ['neck', { fileNames: ['neck.mp3'], volume: 0.4 }],
  ['nice', { fileNames: ['nice.mp3'] }],
  ['pats', { fileNames: ['pats1.mp3', 'pats2.mp3', 'pats3.mp3'] }],
  ['pen', { fileNames: ['pen.mp3'] }],
  ['penis', { fileNames: ['penis.mp3'], volume: 0.9 }],
  ['pissing', { fileNames: ['pissing.mp3'] }],
  ['please', { fileNames: ['please.mp3'] }],
  ['poopy', { fileNames: ['poopy.mp3'] }],
  ['popcoin', { fileNames: ['popcoin.mp3'] }],
  ['porn', { fileNames: ['porn.mp3'] }],
  ['potions', { fileNames: ['potions.mp3'] }],
  ['prettygood', { fileNames: ['prettygood.mp3'] }],
  ['pro cycling manager', { fileNames: ['pro cycling manager.mp3'], volume: 0.4 }],
  ['pussy', { fileNames: ['pussy.mp3'], volume: 0.9 }],
  ['putin', { fileNames: ['putin.mp3'] }],
  ['quickmafs', { fileNames: ['quickmafs.mp3'] }],
  ['renekton', { fileNames: ['renekton.mp3'] }],
  ['sassy', { fileNames: ['sassy1.mp3'] }],
  ['say again', { fileNames: ['say-again.mp3'] }],
  ['shit', { fileNames: ['shit.mp3'] }],
  ['smellz', { fileNames: ['smellz1.mp3', 'smellz2.mp3', 'smellz3.mp3'] }],
  ['somebody', { fileNames: ['somebody.mp3'] }],
  ['soup1', { fileNames: ['soup1.mp3'], volume: 0.9 }],
  ['soup2', { fileNames: ['soup2.mp3'], volume: 0.9 }],
  ['soup3', { fileNames: ['soup3.mp3'], volume: 0.9 }],
  ['succulent', { fileNames: ['succulent.mp3'], volume: 0.9 }],
  ['suh1', { fileNames: ['suh1.mp3'], volume: 0.9 }],
  ['suh2', { fileNames: ['suh2.mp3'], volume: 0.9 }],
  ['suh3', { fileNames: ['suh3.mp3'], volume: 0.9 }],
  ['starving', { fileNames: ['starving (1).mp3'] }],
  ['stinging roger', { fileNames: ['stinging roger.mp3'] }],
  ['street', { fileNames: ['street.mp3'] }],
  ['strong potions', { fileNames: ['strong-potions.mp3'] }],
  ['sus', { fileNames: ['sus.mp3'] }],
  ['the sun priest', { fileNames: ['TheSunPriest.mp3'] }],
  ['viper', { fileNames: ['TheViper.mp3', 'Theviper2.mp3', 'Theviper3.mp3'] }],
  ['tony', { fileNames: ['tony.mp3'] }],
  [
    'trump',
    {
      fileNames: ['trump1.mp3', 'trump2.mp3', 'trump3.mp3', 'trump4.mp3', 'trump5.mp3'],
    },
  ],
  ['uncanny', { fileNames: ['uncanny.mp3', 'uncanny2.mp3'] }],
  ['uncle roger', { fileNames: ['uncle roger.mp3'] }],
  ['wam', { fileNames: ['Dedotated Wam - MLG Sound Effect (HD).mp3'] }],
  ['weans', { fileNames: ['weans.mp3'] }],
  ['wink', { fileNames: ['wink.mp3'], volume: 0.9 }],
  ['yokes', { fileNames: ['yokes.mp3'] }],
]);

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
  if (memes.has(msg.content)) {
    const meme = memes.get(msg.content);
    if (meme && meme.fileNames && meme.fileNames.length > 0) {
      let random = meme.fileNames.length === 1 ? 0 : Math.floor(Math.random() * meme.fileNames.length);
      if (!msg.member.voice.channel) {
        msg.channel.send('Go into a channel to hear this meme.');
      } else {
        await msg.member.voice.channel
          .join()
          .then(connection => {
            const dispatcher = connection.play(
              `audio folder1/${meme.fileNames[random]}`,
              { volume: meme.volume ? meme.volume : 0.6 },
              { highWaterMark: 50 }
            );
            dispatcher.on('finish', () => connection.disconnect());
          })
          .catch(e => {
            console.error(e);
          });
      }
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
