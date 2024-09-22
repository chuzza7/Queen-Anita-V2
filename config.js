no//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xCczdjRXpWWnlxYXJKSmgyMDY0MnptU2RYYmZXZHBXK3h4cFlRdUZFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkYwbUlWVW16SXdqK3F4ZlR3SHgxU0RwMXRXLzFlRVcvRGxzMFlDNzh5QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UExTb2ViRUttV3A3UkU2emhZcWNBUzhQZFZPRysxemh2OE50L0xwOWxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJheXRKTm1GVmtYYmN3U2J0TXZtTEtjMzYxenRkRGt3VkVhMjZvSnVaU25NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JNGY1QWlGNzNEeDhqYjJzaXgrc3Q2T0EwamgzK005anVCblVaZm1lbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUxTk5GUHJ0QU4zOG1aQzBwSk5CaXJYZFNxekd5ZXpBREhwZ3N3ZXZGUm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJ1Y29hSEJodXdYd1dKNG92Q1A4cXFBZ0l3eUYxaTFzeFpUeDFCa0Vtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVJZR0lwNTZ4Z1l6L3BGR1VOQTJ3eVA0NHhQR3JkVnI4OUlIaGNLZE5Ybz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB2d1lKaU02enFSNFgxQTB3SzlEZjVoWWNSdU9OSytQSnN5V2hsZ0JSOVdhM2ZFeWpNTlNkdVdqSFd1dWl4dURIK1BlQm5ZTnV4RGhqbzFGeFJOMGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6InJ1MHNRVm5TTXNIRU9UV0ZISHB4dWJJWCtaTWM1ODlod2xOMThFZ1lGem89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijh0eHV5SVRkVGJTTjlqNDJGS1RBRVEiLCJwaG9uZUlkIjoiMmIyNWQ0ODUtY2YyOS00ZGU3LWIxZWItZmZjZDllZWNkMmUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIwNTZmNUplVXRuVTlxby9BQ21wdWdUTENmYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKcm5tVTlkQlJYVEsrRlMvV2U4RlBpRGpHQXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOENSRVFOSzIiLCJtZSI6eyJpZCI6IjkyMzQ0OTQ2ODc2ODoxMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2ZzaWU0RkVLK3N3YmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRWtpUi9UbGRpWWoramRNdndQYURjSWNIbkE0cWlYSElmajlsQzNhbVRGND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidldjK1RBNzNUYlo1NEpjREdPWWJKZWRDMk9nZEdNTVhmTnk3bm1mdEczeWVrd0t2VGxIWWxBUDZxWkdQVGF4cVphcU9jWTNSekhESmN2WkNUOVVBQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ijg1bHpmNmY2UjZsQXJiVTA1eVNGT1RweDlaMkNQdFFvQU1seGxyWEtRZFNjQk1zckdZUytkMGhPL2pVNWI4Si81MjIyMXZVQXZSaTR6S2VzNlFLeWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDQ5NDY4NzY4OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJKSWtmMDVYWW1JL28zVEw4RDJnM0NIQjV3T0tvbHh5SDQvWlF0MnBreGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjcwMjY3NDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR295In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
