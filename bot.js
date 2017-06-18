const Discord = require("discord.js");
const settings = require("./ewrae.json")

var respostas = ["Sim","Não","Talvez"];

var bot = new Discord.Client();

bot.on('ready', ready => {
  console.log(`Logado como ${bot.user.username} e pronto para uso.`);
});

bot.on("message", message => {
  if(message.author.bot) return;
    if(!message.content.startsWith(settings.prefix)) return;
    var args = message.content.substring(settings.prefix.length).split(" ");

      switch(args[0].toLowerCase()) {
        case "ping":
        var embed = new Discord.RichEmbed()
          .setTitle("Meu ping é de " + bot.ping + "ms.");
          .setColor(0xCC6699);
          message.channel.sendEmbed(embed);
          break;
        case "8ball":
          if(args[1]) message.reply(respostas[Math.floor(Math.random() * respostas.length)]);
          else message.reply("Não entendi.");
          break;
        case "serverinfo":
          var embed = new Discord.RichEmbed()
          .setTitle("Informações de " + message.guild.name);
          .setColor(0x9999FF)
          .addField("Foi criado em", message.guild.createdAt.getDate() + "/" + message.guild.createdAt.getMonth() + "/" + message.guild.createdAt.getFullYear(), true);
          message.channel.sendEmbed(embed);
          break;
        default:
          message.reply("Este comando é invalido.");
  }
});

bot.login(settings.token);
