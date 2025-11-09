// commands/shafi.js
module.exports = {
  name: 'shafi',
  alias: ['shafi', 'shifa', 'barkat'],
  description: 'Shows info and tribute about ALI Raza 😎',
  category: 'fun',

  lastUsed: {},

  async run({ conn, m }) {
    try {
      const chatId = m.chat;
      const sender = m.sender;

      if (!this.lastUsed[chatId]) this.lastUsed[chatId] = {};
      if (!this.lastUsed[chatId][sender]) this.lastUsed[chatId][sender] = 0;

      this.lastUsed[chatId][sender] += 1;

      if (this.lastUsed[chatId][sender] % 2 === 1) {
        // Odd times: Show image with caption
        await conn.sendMessage(chatId, {
          image: { url: 'https://files.catbox.moe/j0ysa0.jpg' }, // your image link
          caption: `👑 *ALI-MD* 👑\n\n✨ The creator of *ALI-MD* ✨\n💖 A visionary coder & bot master 🤖\n🔥 Always innovating, always shining 🌟`
        }, { quoted: m });

      } else {
        // Even times: Show good lines about you
        const messages = [
          `🌟 *ALI Raza* 🌟\nA leader in coding & style 💻\nBringing fun & power to WhatsApp 💬🚀`,
          `💖 *ALI Raza* 💖\nYour friendly developer 😎\nAlways coding with passion & heart ✨`,
          `🔥 *ALi Raza* 🔥\nMastermind of bots 👑\nALI-MD is his legacy 🤖`
        ];

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        await conn.sendMessage(chatId, {
          text: randomMsg,
          mentions: [sender],
        }, { quoted: m });
      }

    } catch (err) {
      console.error('❌ Shafi command error:', err);
      await conn.sendMessage(m.chat, {
        text: '💔 Oops! Something went wrong while showing ALI-MD info...',
      }, { quoted: m });
    }
  }
};
