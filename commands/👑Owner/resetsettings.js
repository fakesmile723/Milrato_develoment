var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
var config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
var emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const fs = require('fs');
const fetch = require('node-fetch');
var {
  databasing, isValidURL
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "resetsettings",
  type: "info",
  category: "👑Owner",
  aliases: ["resetallsettings", "hardreset"],
  cooldown: 5,
  usage: "resetsettings",
  description: "Reset (delete) All settings",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!config.ownerIDS.some(r => r.includes(message.author.id)))
        return message.channel.send({embeds : [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setFooter(client.getFooter(es))
          .setTitle(eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable1"]))
          .setDescription(eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable2"]))
        ]});
    try {
      message.channel.send({content : eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable3"])}).then(msg=>{
        msg.channel.awaitMessages({filter: m => m.author.id == message.author.id, max: 1, time: 30e3, errors: ["time"]}).then(collected=>{
          if(collected.first().content.toLowerCase() == "yes"){

            client.notes.delete(message.guild.id)
            client.economy.delete(message.guild.id)
            client.invitesdb.delete(message.guild.id)
            client.tiktok.delete(message.guild.id)
            client.youtube_log.delete(message.guild.id)
            client.premium.delete(message.guild.id)
            client.mutes.delete(message.guild.id)
            client.snipes.delete(message.guild.id)
            client.stats.delete(message.guild.id)
            client.afkDB.delete(message.guild.id)
            client.musicsettings.delete(message.guild.id)
            //client.settings.delete(message.guild.id)
            client.jointocreatemap.delete(message.guild.id)
            client.joinvc.delete(message.guild.id)
            client.setups.delete(message.guild.id)
            client.queuesaves.delete(message.guild.id)
            client.modActions.delete(message.guild.id)
            client.userProfiles.delete(message.guild.id)
            client.jtcsettings.delete(message.guild.id)
            client.roster.delete(message.guild.id)
            client.autosupport.delete(message.guild.id)
            client.menuticket.delete(message.guild.id)
            client.menuapply.delete(message.guild.id)
            client.apply.delete(message.guild.id)
            client.points.delete(message.guild.id)
            client.voicepoints.delete(message.guild.id)
            client.reactionrole.delete(message.guild.id)
            client.social_log.delete(message.guild.id)
            client.blacklist.delete(message.guild.id)
            client.customcommands.delete(message.guild.id)
            client.keyword.delete(message.guild.id)
            

          es = client.settings.get(message.guild.id, "embed")
          return message.channel.send({embeds :[new MessageEmbed()
            .setColor(es.color)
            .setFooter(client.getFooter(es))
            .setTitle(eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable4"]))
          ]});
          }else{
            return message.channel.send({embeds : [new MessageEmbed()
            .setColor(es.wrongcolor)
            .setFooter(client.getFooter(es))
            .setTitle(eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable5"]))
            ]});
          }
        })
      })

    } catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.channel.send({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["owner"]["resetsettings"]["variable6"]))
      ]});
    }
  },
};
/**
 * @INFO
 * Bot Coded by Truchorko_ | https://discord.gg/team-arcades-935157109761388554
 * @INFO
 * Work for Milrato Development | https://teamarcades.xyz
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
