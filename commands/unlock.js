module.exports = {
  name: "unlock",
  category: "moderation",
run : (client, message, args) => { 
//Make this fit your command handler style
  if (!client.lockit) client.lockit = []; 
  if (!message.member.hasPermission("MANAGE_CHANNELS")) 
    return message.channel.send("**You Need (Manage_Channels) Permission**");   
  message.channel.createOverwrite(message.guild.id, {   
    SEND_MESSAGES: null  
  }).then(() => {    
    message.channel.send('Lockdown lifted');    
    delete client.lockit[message.channel.id];  
  }).catch(error => {   
    console.log(error);    
  })
}
}
