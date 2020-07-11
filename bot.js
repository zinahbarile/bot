const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('1286723525:AAH1-40Fi6h0JwNmJvGQRZtxMh43Oxk1MOI');


const apikey = "50c8d53062b7f27b94f71e5db6bc387b53e43cc1c69e4811b5927db19d89d81b";

bot.command('start', ctx =>{
    sendStartMessage(ctx);
})

bot.action('start', ctx =>{

    ctx.deleteMessage();
    sendStartMessage(ctx);
})

function sendStartMessage(ctx){

let startMessage = `    Welcome to Fraud and Asset Recovery

If you discover you are a victim of fraud, it is a good idea to contact a fraud recovery expert for advice.
Our areas of work includes: 
- Internet and eCommerce fraud
- Romance Scam
- Cryptocurrency Scam
- Binary Option
- Forex Trading

Have you being a victim of scam / fraud before ?`;
bot.telegram.sendMessage(ctx.chat.id, startMessage, 
        {
            reply_markup: {
                inline_keyboard: [
                [
                    {text: "Yes", callback_data: 'yes-scam'},
                    {text: "No", callback_data: 'no-scam'}

                ], 
                [
                    {text: "Not me, a friend", callback_data: 'info' }
                ]
            ]}
        })
}
bot.action('yes-scam', ctx =>{
    let priceMessage = `What type of scam were you involved in ?`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "BTC", callback_data: 'BTC-scam'},
                {text: "ETH", callback_data: 'ETH-scam'}
            ], 
            [
                {text: "Binary", callback_data: 'BINARY-scam'},
                {text: "Forex", callback_data: 'FOREX-scam'}
            ],
            [
                {text: "Other", callback_data: 'OTHER-scam'}
            ],
            [
                {text: "Back to Menu", callback_data: 'start'} 
            ]
        ]}

    })
})
bot.action('no-scam', ctx =>{
    let priceMessage = `Do you want to report an ongoing scam ?`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Yes", callback_data: 'yes-report'},
                {text: "No", callback_data: 'yes-scam'}
            ]
        ]}

    })
})
bot.action('BTC-scam', ctx =>{
    let priceMessage = `Let's take you through the process of recovering your Bit Coin Cryptocurrency. \n\nPlease talk with one of our agents @Customer_Serv`;

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Back", callback_data: 'yes-scam'}
            ]
        ]}

    })
})
bot.action('BINARY-scam', ctx =>{
    let priceMessage = `Let's take you through the process of recovering your funds lost via Binary Investment. \n\nPlease talk with one of our agents @Customer_Serv`;

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Back", callback_data: 'yes-scam'}
            ]
        ]}

    })
})

bot.action('ETH-scam', ctx =>{
    let priceMessage = `Let's take you through the process of recovering your Ethereum Cryptocurrency. \n\nPlease talk with one of our agents @Customer_Serv`;

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Back", callback_data: 'yes-scam'}
            ]
        ]}

    })
})


bot.action('FOREX-scam', ctx =>{
    let priceMessage = `Let's take you through the process of recovering funds lost via Forex Trading. \n\nPlease talk with one of our agents @Customer_Serv`;

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Back", callback_data: 'yes-scam'}
            ]
        ]}

    })
})
bot.action('OTHER-scam', ctx =>{
    let priceMessage = `Please talk with one of our agents @Customer_Serv`;

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
            [
                {text: "Back", callback_data: 'yes-scam'}
            ]
        ]}

    })
})

bot.action('info', ctx =>{
    ctx.answerCbQuery();
    bot.telegram.sendMessage(ctx.chat.id, "Please speak with one of our agents", {
        reply_markup:{
            keyboard: [
                [
                    {text: "@Customer_Serv"},
                    {text: "API"}
                ],
                [
                    {text: "Remove Keyboard"}
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    } )
})

bot.hears('Credits', ctx =>{
    ctx.reply('This bot was made @zinah');
})
bot.hears('API', ctx =>{
    ctx.reply('This bot uses cryptocompare API');
})
bot.hears('Remove Keyboard', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, "Keyboard Removed", 
    {
        reply_markup: {
            remove_keyboard: true
        }
    })
})


bot.launch(); 
