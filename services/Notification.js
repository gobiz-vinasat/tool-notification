const axios = require('axios');

class Notification {
    async dingTalk({token, keyword}, title, text = null) {
        text = text || title;

        if (keyword) {
            text = `${keyword}: ${text}`;
        }

        return await axios.post('https://oapi.dingtalk.com/robot/send?access_token=' + token, {
            msgtype: 'markdown',
            markdown: {title, text},
        }, {
            headers: {'Content-Type': 'application/json'},
        });
    }
}

module.exports = Notification;