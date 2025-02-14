const {
  MessageEmbed
} = require(`discord.js`)
const config = require(`${process.cwd()}/botconfig/config.json`)
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  createBar,
  format
} = require(`${process.cwd()}/handlers/functions`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `forward`,
  category: `🎶Music`,
  aliases: [`seekforwards`, `fwd`],
  description: `Seeks a specific amount of Seconds forwards`,
  usage: `forward <Duration in Seconds>`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!client.settings.get(message.guild.id, "MUSIC")) {
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
      ]});
    }
    try {
      //if no args available, return error
      if (!args[0])
        return message.reply({embeds : [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setTitle(handlemsg(client.la[ls].cmds.music.forward.allowed, {duration: player.queue.current.duration}))
        ]});
      //get the seektime variable of the user input
      let seektime = Number(player.position) + Number(args[0]) * 1000;
      //if the userinput is smaller then 0, then set the seektime to just the player.position
      if (Number(args[0]) <= 0) seektime = Number(player.position);
      //if the seektime is too big, then set it 1 sec earlier
      if (Number(seektime) >= player.queue.current.duration) seektime = player.queue.current.duration - 1000;
      //seek to the new Seek position
      player.seek(Number(seektime));
      //Send Success Message
      return message.reply({embeds : [new MessageEmbed()
        .setTitle(client.la[ls].cmds.music.forward.title)
        .setDescription(handlemsg(client.la[ls].cmds.music.forward.description, {amount: args[0], time: format(Number(player.position))}))
        .addField(client.la[ls].cmds.music.forward.field, createBar(player))
        .setColor(es.color)
      ]});
    } catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["music"]["forward"]["variable1"]))
      ]});
    }
  }
};
/**
 * @INFO
 * Bot Coded by Truchorko_ | https://github?.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://teamarcades.xyz
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
