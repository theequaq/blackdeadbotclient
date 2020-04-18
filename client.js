const discord = require('discord.js');
const client = new discord.Client();
client.commands = new discord.Collection();
require('dotenv').config();
if(!discord) return console.log('do npm install dsicord.js');
if(!process.env.TOKEN) return console.log('TOKEN not found in .env file!');
if(!process.env.PREFIX) return console.log('PREFIX not found in the .env file!')
client.prefix = process.env.PREFIX;
const package = require('./package.json');
client.v = package.version;
module.exports = client;
