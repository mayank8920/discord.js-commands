const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setmuterole",
  category: "config",
  run: async(client, message, args) => {
    // Use it according to your command handler style 😀
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You Don't Have Enough Perms To Run This Commmand")
    }
    
    let role = message.mentions.roles.first()
if (!role) return message.channel.send("Mention A Role Too Next Time")
db.set(`muterole_${message.guild.id}`, role.id)
  
    let embed = new discord.MessageEmbed()
    .setTitle("Mute Role Set-up Done")
    .setColor("00ffcc")
    
    message.channel.send(embed)
    
    
    
    
    
  }
}
