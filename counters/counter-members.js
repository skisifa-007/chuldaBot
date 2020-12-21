module.exports = async (bot) =>{
    const guild = bot.guilds.cache.get("748957014910304287");
    setInterval(()=>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("790609144838619189");
        channel.setName(`ȼħᵾłđⱥ ᵯēᵯƀēɍꞩ : ${memberCount.toLocaleString()}`);
    },50000);
}