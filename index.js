require('dotenv').config()


const { Telegraf } = require('telegraf')


// const bot = new Telegraf(process.env.BOT_TOKEN)


//? Create the bot
const myBot = new Telegraf(process.env.BOT_TOKEN,);

myBot.use((ctx) => {
    // console.log(ctx);
    ctx.reply(ctx.message.text);
});

//? Launch Bot
myBot.launch();
