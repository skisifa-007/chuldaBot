module.exports = {
    name:"clear",
    discription:"clear the chat in channel",
    execute(message,args){
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have permission!");
        let deleteAmount;
        if(!args[0]) return message.reply("Please enter the amount of messages");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");
        if(args[0] > 99){
            return message.reply("You canno't delete more than 100 messages!");
        }
        else{
            deleteAmount = parseInt(args[0]); 
        }
        message.channel.bulkDelete(deleteAmount+1,true);
    }

}