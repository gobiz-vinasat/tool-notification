const axios = require('axios');
const {dingTalk} = require('../config');

class Notification {
    async dingTalk(title, text = null) {
        text = text || title;

        if (dingTalk.keyword) {
            text = `${dingTalk.keyword}: ${text}`;
        }

        return await axios.post('https://oapi.dingtalk.com/robot/send?access_token=' + dingTalk.token, {
            msgtype: 'markdown',
            markdown: {title, text},
        }, {
            headers: {'Content-Type': 'application/json'},
        });
    }
}

module.exports = Notification;