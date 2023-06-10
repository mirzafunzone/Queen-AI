/***
                                ╭━━━┳╮ ╭┳━━━┳━━━┳━╮ ╭╮    ╭━━━┳━━╮
                                ┃╭━╮┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╭━╮┣┫┣╯
                                ┃┃ ┃┃┃ ┃┃╰━━┫╰━━┫╭╮╰╯┃    ┃┃ ┃┃┃┃
                                ┃┃ ┃┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃╭━━╮┃╰━╯┃┃┃
                                ┃╰━╯┃╰━╯┃╰━━┫╰━━┫┃ ┃┃┃╰━━╯┃╭━╮┣┫┣╮
                                ╰━━╮┣━━━┻━━━┻━━━┻╯ ╰━╯    ╰╯ ╰┻━━╯
                                   ╰╯
## Project Name => Ali_King
## Project Version => 1.0.0  
## Project Author => ALI_KING
## Project license => MIT
## Project Team => DRAGON Team
## Module Name => config.js
## Coded By DarkWinzo
***/ 

const fs = require('fs');
const chalk = require('chalk');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

global.session = process.env.SESSION_ID || "PUT HERE"; //enter your session id here

global.openaikey = process.env.OPEN_AI_KEY || "ENTER_API-KEY_HERE"; //Put Your Open AI Api key

global.ownername = process.env.OWNER_NAME || "ALI_KING_DRAGON_TEAM"; //Queen-AI Owner Name here

global.ownernumber = process.env.OWNER_NUMBER || "923252752761"; //Owner whatsapp number here

global.language = process.env.LANGUAGE || "UR"; //Enter bot working language EN = English / SI = Sinhala /ML = Malayalam /HI =Hindi /UR = Urdu

global.prefix = ['.'] //Don't Change

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update config.js"))
	delete require.cache[file]
	require(file)
});
