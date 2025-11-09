module.exports = {
  name: "support",
  alias: ["helpbot", "support", "pathanupport"],
  description: "Get ALI-MD support links and contact info",
  category: "general",
  async run({ conn, m }) {
    const caption = `🛠️ *ALI-MD - SUPPORT CENTER* 🛠️



💬 *WhatsApp Support Group:*  https://chat.whatsapp.com/JsIwJgl2stBIoAwmZX1UN0?mode=wwt

📲 *Telegram Support:*  
https://t.me/ 🆔♻️

🧑‍💻 *GitHub Repository:*  https://github.com/ALI-MD-BOT/ALI-MD

📞 *Bot Admin:*  
wa.me/923498776243

📞 *Bot Owner:*  
wa.me/923498776243

🧠 Use *.menu* to explore commands.
💥 Stay updated and have fun using ALI-MD!`;

    await conn.sendMessage(m.chat, {
      text: caption,
      mentions: [m.sender]
    }, { quoted: m });
  }
};
