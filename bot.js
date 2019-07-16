var Headless = require('./headless')

var key = 'cabal://dbba51816be0a6199a769f96726621398d81db6faca829012f79c3c2d8d5f529'

var opts = {}

var cabalkey = key.replace("cabal://", "").replace("cbl://", "")

var headless = Headless(cabalkey, { temp: opts.temp || false })

headless.nick('cabalbot')

headless.connect() // connect to the cabal's swarm

headless.onMessageReceived(function (msg) {
    console.log("new message", msg)
    var txt = msg.value.content.text
    var parts = txt.split(" ")
    
    if (parts[0]=="@cabalbot") {
		headless.post({
			messageType: "chat/text",
			channel: "default",
			message: "yo"
		})
	}
	
	
})
