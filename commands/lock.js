module.exports = {
  name: "lock",
  description: "lockdown a channel",
  category: "moderation",
 usage: "lock",
run:  (client, message, args) => {  
// Make this fit your command handler style 😀
  if (!client.lockit) client.lockit = []; // Required, not so important tho
if  (!message.member.hasPermission("MANAGE_CHANNELS")) 
  return message.channel.send("**You Need (Manage_Channels) Permission**"); 
      message.channel.createOverwrite(message.guild.id, {   
        SEND_MESSAGES: false 
      })   
    message.channel.send(`Damnn, **${message.author.username}** just locked the channel down.`); 
     }
}
