export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (global.maintenance_mode) {
    return m.reply('El bot está actualmente en modo mantenimiento. Vuelve a intentarlo más tarde.');
  }
  if (m.isBaileys && m.fromMe) return !0
  if (m.isGroup) return !1
  if (!m.message) return !0
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA')) return !0
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  if (bot.antiPrivate && !isOwner && !isROwner) {
  await m.reply(`*hola @${m.sender.split`@`[0]}, hablar con el bot en el privado es ilegal por tanto seras bloqueado. Si desea usar el bot entre en este grupo:* 
  ${wagp}`, false, { mentions: [m.sender] })
  await this.updateBlockStatus(m.chat, 'block')}
  return !1
  }
  