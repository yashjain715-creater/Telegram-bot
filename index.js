const { Telegraf } = require('telegraf')

const bot = new Telegraf('1340327488:AAF3k_g4Yd8lvpscXBIsvintz8vaU2qPMVA')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('kaem cho'))
bot.command('say', (ctx) => {
    msg = ctx.message.text
    msgArray=msg.split(' ')
    console.log(msgArray)
    msgArray.shift()
    console.log(msgArray)
    newmsg=msgArray.join(' ')
    return ctx.reply(newmsg)
})
bo.catch((err,ctx) => {
    console.log('Oops ,encountered an error for ${ctx.UpdateType}',err)
})
bot.start((ctx) => {
    throw new Error('Example error')
})
bot.launch()