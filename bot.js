require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const { OpusEncoder } = require("@discordjs/opus");
const { Client, Intents } = require("discord.js");

const client = new Client({
  ws: { intents: Intents.All },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

const memes = new Map([
  [{ fileNames: ["anime.mp3"] }, "anime"],
  [{ fileNames: ["ara ara.mp3"] }, "ara ara"],
  [{ fileNames: ["arkbar.mp3"] }, "arkbar"],
  [{ fileNames: ["asnee.mp3"] }, "asnee"],
  [{ fileNames: ["autism.mp4"] }, "autism"],
  [{ fileNames: ["bear patrol.mp3"] }, "bear patrol"],
  [{ fileNames: ["bender.mp3"] }, "bender"],
  [{ fileNames: ["bigshaq.mp3"] }, "bigshaq"],
  [{ fileNames: ["bono.mp3"] }, "bono"],
  [{ fileNames: ["borat.mp3"] }, "borat"],
  [{ fileNames: ["buklau.mp3", "buklau2.mp3", "buklau3.mp3"] }, "buklau"],
  [{ fileNames: ["byriers.mp3"] }, "breyers"],
  [{ fileNames: ["call to prayer.mp3"], volume: 0.2 }, "call to prayer"],
  [{ fileNames: ["carlton.mp3"] }, "carlton"],
  [{ fileNames: ["cat jam original.mp3"] }, "cat jam"],
  [{ fileNames: ["coke.mp3"] }, "coke"],
  [{ fileNames: ["cold snap.mp3"] }, "cold snap"],
  [{ fileNames: ["divorce-cute.mp3"] }, "divorce cute"],
  [{ fileNames: ["divroce-short.mp3"] }, "divorce short"],
  [{ fileNames: ["donkey.mp3"] }, "donkey"],
  [{ fileNames: ["dortycorry1.mp3", "dortycorry2.mp3"] }, "dortycorry"],
  [{ fileNames: ["Edscream.mp3"] }, "ed scream"],
  [{ fileNames: ["egg.mp3"] }, "egg"],
  [{ fileNames: ["eyboss.mp3"] }, "eyboss"],
  [{ fileNames: ["foksmash.mp3"] }, "foksmash"],
  [{ fileNames: ["getaknife.mp3"] }, "getaknife"],
  [
    {
      fileNames: [
        "government-sponsors.mp3",
        "dublin-airport.mp3",
        "public-stonings.mp3",
        "rebel-stronghold.mp3",
      ],
    },
    "news",
  ],
  [{ fileNames: ["hal.mp3"] }, "hal"],
  [{ fileNames: ["halo theme.mp3"], volume: 0.4 }, "halo theme"],
  [{ fileNames: ["harry1.mp3", "harry2.mp3"] }, "harry"],
  [{ fileNames: ["heffo.mp3"] }, "heffo"],
  [{ fileNames: ["horseplay.mp3"] }, "horseplay"],
  [{ fileNames: ["joey.mp3"] }, "joey"],
  [{ fileNames: ["John-I-want-Divorce.mp3"] }, "divorce"],
  [{ fileNames: ["knifey.mp3"] }, "knifey"],
  [{ fileNames: ["knuckles1.mp3", "knuckles2.mp3"] }, "knucles"],
  [{ fileNames: ["LADS.mp3"] }, "lads"],
  [{ fileNames: ["ladsfull.mp3"] }, "ladsfull"],
  [{ fileNames: ["legs (1).mp3"] }, "legs"],
  [{ fileNames: ["lesson.mp3"] }, "lesson"],
  [{ fileNames: ["lie detector.mp3"] }, "lie detector"],
  [{ fileNames: ["lovely.mp3", "lovely2.mp3"] }, "lovely"],
  [{ fileNames: ["mac shut up.mp3"], volume: 1.8 }, "mac shut up"],
  [{ fileNames: ["menu1.mp3, menu2.mp3, menu3.mp3"] }, "menu"],
  [{ fileNames: ["miranda.mp3"] }, "miranda"],
  [{ fileNames: ["mr freeze.mp3", "mrfreeze.mp3"] }, "mr freeze"],
  [{ fileNames: ["muck.mp3"] }, "muck"],
  [{ fileNames: ["neck.mp3"], volume: 0.4 }, "neck"],
  [{ fileNames: ["nice.mp3"] }, "nice"],
  [{ fileNames: ["pats1.mp3", "pats2.mp3", "pats3.mp3"] }, "pats"],
  [{ fileNames: ["pen.mp3"] }, "pen"],
  [{ fileNames: ["penis.mp3"], volume: 0.9 }, "penis"],
  [{ fileNames: ["pissing.mp3"] }, "pissing"],
  [{ fileNames: ["please.mp3"] }, "please"],
  [{ fileNames: ["poopy.mp3"] }, "poopy"],
  [{ fileNames: ["popcoin.mp3"] }, "popcoin"],
  [{ fileNames: ["porn.mp3"] }, "porn"],
  [{ fileNames: ["potions.mp3"] }, "potions"],
  [{ fileNames: ["prettygood.mp3"] }, "prettygood"],
  [{ fileNames: ["putin.mp3"] }, "putin"],
  [{ fileNames: ["quickmafs.mp3"] }, "quickmafs"],
  [{ fileNames: ["renekton.mp3"] }, "renekton"],
  [{ fileNames: ["sassy1.mp3"] }, "sassy"],
  [{ fileNames: ["say-again.mp3"] }, "say again"],
  [{ fileNames: ["shit.mp3"] }, "shit"],
  [{ fileNames: ["smellz1.mp3", "smellz2.mp3", "smellz3.mp3"] }, "smellz"],
  [{ fileNames: ["somebody.mp3"] }, "somebody"],
  [{ fileNames: ["starving (1).mp3"] }, "starving"],
  [{ fileNames: ["stinging roger.mp3"] }, "stinging roger"],
  [{ fileNames: ["street.mp3"] }, "street"],
  [{ fileNames: ["strong-potions.mp3"] }, "strong potions"],
  [{ fileNames: ["sus.mp3"] }, "sus"],
  [{ fileNames: ["TheSunPriest.mp3"] }, "the sun priest"],
  [{ fileNames: ["TheViper.mp3", "Theviper2.mp3", "Theviper3.mp3"] }, "viper"],
  [{ fileNames: ["tony.mp3"] }, "tony"],
  [
    {
      fileNames: [
        "trump1.mp3",
        "trump2.mp3",
        "trump3.mp3",
        "trump4.mp3",
        "trump5.mp3",
      ],
    },
    "trump",
  ],
  [{ fileNames: ["uncanny.mp3", "uncanny2.mp3"] }, "uncanny"],
  [{ fileNames: ["uncle roger.mp3"] }, "uncle roger"],
  [{ fileNames: ["weans.mp3"] }, "weans"],
  [{ fileNames: ["yokes.mp3"] }, "yokes"],
]);

client.on("messageReactionAdd", async (reaction, user) => {
  // When a reaction is received, check if the structure is partial
  if (reaction.partial) {
    // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message: ", error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
    if (
      reaction.emoji.name === "👎" &&
      reaction.message.member.id === "276804557055721483"
    ) {
      console.log("if statemnet passed");
      reaction.message.channel.send("Good man yourself, keep downvoting Mark");
    } else {
    }
  }
});

client.on("message", async (msg) => {
  if (memes.has(msg.content)) {
    const meme = memes.get(msg.content);
    if (meme && meme.fileNames && meme.fileNames.length > 0) {
      let random =
        meme.fileNames.length === 1
          ? 0
          : Math.floor(Math.random() * meme.fileNames.length);
      if (!msg.member.voice.channel) {
        msg.channel.send("Go into a channel to hear this meme.");
      } else {
        await msg.member.voice.channel
          .join()
          .then((connection) => {
            const dispatcher = connection.play(
              `audio folder1/${meme.fileNames[random]}`,
              { volume: meme.volume ? meme.volume : 0.6 },
              { highWaterMark: 50 }
            );
            dispatcher.on("finish", () => connection.disconnect());
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
  }
});

client.on("message", async (msg) => {
  // Downvotes Mark
  if (msg.member.id === "276804557055721483") {
    msg.react("👎");
  }

  if (msg.member.id === "270185954789031936") {
    msg.react("🤡");
  }

  if (msg.member.id === "184793319014924289") {
    msg.react("🤡");
  }

  if (msg.member.id === "140845637636718595") {
    // Upvotes Mac
    msg.react("👍");
  }

  if (msg.member.id === "378702852786356224") {
    // Rat Emojis eddy
    msg.react("🐀");
  }

  if (msg.content === "is edd a rat") {
    // simple string sent to channel on condition
    msg.channel.send(
      "I see absolutely no difference between edd and Stuart Little"
    );
  }

  if (msg.content === "start intro" && msg.member.id === "140845637636718595") {
    // changes boolean which is required to play intro music, also sends a message with their username.
    macIntro = true;
    if (msg.member.nickname === null) {
      msg.channel.send(`${msg.member.displayName} has turned their intro on..`);
    } else {
      msg.channel.send(`${msg.member.nickname} has their intro on..`);
    }
  }

  if (msg.content === "stop intro" && msg.member.id === "140845637636718595") {
    macIntro = false;
    if (msg.member.nickname === null) {
      msg.channel.send(`${msg.member.displayName} has their intro turned off.`);
    } else {
      msg.channel.send(`${msg.member.nickname} has their intro turned off.`);
    }
  }

  if (msg.content === "is bray a shithole") {
    msg.channel.send("yes, bray is shit.");
  }
});

client.login(process.env.BOT_TOKEN);
