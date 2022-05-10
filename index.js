var mineflayer = require('mineflayer')
var express = require('./Online.js')
var server = {
  host: "live.gamename.net",
  port: 25565,
  username: "LiveBot"
}
 
var bot = mineflayer.createBot(server)

function AntiAFK() {
  bot.setControlState('forward', true)
  bot.setControlState('jump', true)
  bot.setControlState('back', true)
  bot.setControlState('left', true)
  bot.setControlState('right', true)
}
 
bot.once('spawn', AntiAFK)

function reconnect() {
  bot = mineflayer.createBot(server)
  bot.on('kicked', () => {
    reconnect()
  })
  bot.on('error', () => {
    reconnect()
    bot = mineflayer.createBot(server)
  })
}
reconnect()
