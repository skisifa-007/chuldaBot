require("dotenv").config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const counterMembers = require("./counters/counter-members");
const fs = require("fs");
bot.commands = new Discord.Collection();




const prefix = "+";



const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const _command = require(`./commands/${file}`);
  bot.commands.set(_command.name,_command);

}





bot.on('ready', () => {
  counterMembers(bot);
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('guildMemberAdd', (member) => {
  let welcomeRole = member.guild.roles.cache.find(role => role.id == "755183021099057233");
  member.roles.add(welcomeRole);
  
});



bot.on('message', (msg) => {
  if(!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();
  switch (command) {
    case "ping":
      bot.commands.get("ping").execute(msg,args);  
    break;
    case "clear":
      bot.commands.get("clear").execute(msg,args);
    break;
  }


});





// function safhat(msg){
//   let content = msg.content.toLowerCase();
//   let list = ["fuck","pussy","cock","dick","bitch","fucker","shit"];
//   list_of_words = content.split(" ");
//   for(i=0; i<list.length ; i++){
//     for(x=0; x<list_of_words.length; x++){
//       if(list_of_words[x] == list[i]){
//         msg.reply("kon ta7xam bala kalam fa7ix");
//       }
//     }
//   }

// }

// function hello(msg){
//   let content = msg.content.toLowerCase();
//   let list = ["hello","hey","hi"];
//   for(i=0; i<list.length ; i++){
//     if(content == list[i]){
//       msg.reply("Welcome To Our Chulda Server!");
//       let ballembed = new Discord.MessageEmbed().attachFiles("https://media.tenor.com/images/1170597818a37a7c6e3e1d4baeb6e2eb/tenor.gif")
//       msg.channel.send(ballembed);
//     }
//   }

// }

// login to token and run the bot
bot.login(process.env.TOKEN);
