const lodash = require('lodash');
const {notification} = require('../services');

exports.sentry = (req, res) => {
    let project = lodash.toUpper(req.body.project);
    let url = req.body.url;
    let message = lodash.get(req.body, 'event.metadata.value') || req.body.title;

    notification.dingTalk(
        `${project}: ${message}`,
        `[${project}](${url}) có biến [${message}](${url})`
    );

    res.send('OK');
};
