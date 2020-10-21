const { Telegraf } = require('telegraf')

const bot = new Telegraf('1340327488:AAF3k_g4Yd8lvpscXBIsvintz8vaU2qPMVA')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('kaem cho'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()