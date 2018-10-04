const DiscordRPC = require('discord-rpc') // Requires the discord-rpc library

const rpc = new DiscordRPC.Client({ transport: 'ipc' }) // MAkes a new rpc client

module.exports = rpc
