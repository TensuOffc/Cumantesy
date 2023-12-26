const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')
const youtube = require("yt-search");

var handler = async (m, {
    conn,
    text,
    usedPrefix
}) => {
    if (!text) throw 'Enter Title / Link From YouTube!';
    try {
        var search = await youtube(text);
        var convert = search.videos[0];
        if (!convert) throw 'Video/Audio Tidak Ditemukan';
        if (convert.seconds >= 3600) {
            return conn.reply(m.chat, 'Video is longer than 1 hour!', m);
        } else {
            var audioUrl
            try {
                audioUrl = `https://aemt.me/downloadAudio?URL=${convert.url}&videoName=ytdl`
            } catch (e) {
                conn.reply(m.chat, wait, m)
                audioUrl = `https://yt.tioo.eu.org/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
            } 
            var build = await fetch(convert.image);
            var buffer = await build.buffer();
            var image = await uploadImage(buffer);
            var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail : ${image}`;
            var pesan = conn.relayMessage(m.chat, {
                extendedTextMessage:{
                text: caption, 
                contextInfo: {
                     externalAdReply: {
                        title: "Powered by",
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: image,
                        sourceUrl: audioUrl
                    }
                }, mentions: [m.sender]
                }}, {})
            conn.sendMessage(m.chat, {
                audio: {
                    url: audioUrl
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: convert.title,
                        body: "",
                        thumbnailUrl: image,
                        sourceUrl: audioUrl,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: m
            });
        }
    } catch (e) {
        conn.reply(m.chat, `*Error:* ` + e, m);
    }
};

handler.command = handler.help = ['playy', 'song'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler
