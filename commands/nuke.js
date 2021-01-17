const Discord = require('discord.js') 
module.exports = {
  name: "nuke",
  category: "moderation",
  run : async(client, message, args) => {
//Make this fit your command handler style 😀

if (!message.member.hasPermission("MANAGE_CHANNELS")) {  
  return message.reply("**You Need (MANAGE_CHANNELS) Permission To Run This Command")   
  let channel = client.channels.cache.get(message.channel.id)
  
let Position = channel.position;   
  channel.clone().then((channel2) => {   
    channel2.setPosition(Position)  
    channel.delete()   
    channel2.send("Channel Has been nuked !",{   
      files: ['https://media.tenor.com/images/0754697c9c4dd44ca8504dbf1b36b927/tenor.gif']   
    }) 
  })   
}
}
