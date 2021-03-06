// Only create the Sharding Manager

const DiscordRSS = require('./index.js')
const Discord = require('discord.js')
const shardingManager = new Discord.ShardingManager('./server-shard.js', { respawn: false })
const shardedDiscordRSSClient = new DiscordRSS.ClientSharded(shardingManager, { readFileSchedules: true, setPresence: true, forceSharded: true })

shardedDiscordRSSClient.run()

shardedDiscordRSSClient.on('finishInit', () => {
  // Do whatever once the sharding manager has finished spawning and waiting for all shards to finish initialization
})
