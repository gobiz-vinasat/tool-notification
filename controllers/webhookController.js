const lodash = require('lodash');
const {notification} = require('../services');
const config = require('../config/config');
const channels = require('../config/channels');

exports.sentry = (req, res) => {
    if (config.debug) {
        console.log('sentry', JSON.stringify(req.body));
    }

    let channel = req.params.channel ?? 'default';
    let project = lodash.toUpper(req.body.project);
    let url = req.body.url;
    let message = lodash.get(req.body, 'event.metadata.value') || req.body.title;

    notification.dingTalk(
        channels[channel],
        `${project}: ${message}`,
        `[${project}](${url}) có biến [${message}](${url})`
    );

    res.send('OK');
};
