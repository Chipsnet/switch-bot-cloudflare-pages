export async function onRequestPost(context, env) {
    const res = await fetch(`https://api.switch-bot.com/v1.0/devices/${context.env.deviceId}/commands`, {
        method: "POST",
        body: JSON.stringify({
            "command": "toggle"
        }),
        headers: {
            "Authorization": context.env.TOKEN,
            "Content-Type": "application/json; charset=utf8"
        }
    })

    if (res.status === 200) {
        return new Response("OK", {status: 200})        
    } else {
        return new Response("Bad req", {status: 400})        
    }
}