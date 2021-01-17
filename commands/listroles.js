const Discord = require('discord.js') 
module.exports = {  
  name: 'listroles',  
  category: "utility",
  run: async (client, message, args) => {  
// make this fit your command handler style 😀

    let rolemap = message.guild.roles.cache      
    .sort((a, b) => b.position - a.position)   
    .map(r => r)         
    .join("\n");       
    if (rolemap.length > 1024) rolemap = "To many roles to display";     
    if (!rolemap) rolemap = "No roles to display"; 
    const embed = new Discord.MessageEmbed()   
    .addField("Role List" , rolemap)   
    .setColor("00ffcc")
    message.channel.send(embed);
  }
} 
