const lodash = require('lodash');
const {notification} = require('../services');
const config = require('../config');

exports.sentry = (req, res) => {
    if (config.debug) {
        console.log('sentry', JSON.stringify(req.body));
    }

    let project = lodash.toUpper(req.body.project);
    let url = req.body.url;
    let message = lodash.get(req.body, 'event.metadata.value') || req.body.title;

    notification.dingTalk(
        `${project}: ${message}`,
        `[${project}](${url}) có biến [${message}](${url})`
    );

    res.send('OK');
};
