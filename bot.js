const Discord = require("discord.js");
var bot = new Discord.Client();
const settings = require("./firefly.json")

var respostas = {
  "Sim",
  "Não",
  "Talvez"
}

bot.on('ready', ready => {
  console.log(`Logado como ${bot.user.username} e pronto para uso.`);
});

bot.on("message", message => {
  if(message.author.bot) return;
    if(!message.content.startsWith(settings.prefix)) return;
    var args = message.content.substring(settings.prefix.length).split(" ");

      switch(args[0].toLowerCase()) {
        case "ping":
          message.channel.sendMessage("Meu ping é de " + bot.ping + "ms");
          break;
        case "8ball":
          if(args[1]) {
            message.channel.sendMessage(respostas[Math.floor(Math.random() * respostas.length)]);
          } else {
            message.channel.sendMessage("Não entendi.");
          }
        default:
          message.reply("Este comando é invalido.");
  }
});

bot.login(settings.token);