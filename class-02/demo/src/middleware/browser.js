'use strict';

// change the request, by adding the name of the browser to it directly.
module.exports = (req, res, next) => {
    const browserInfo = req.headers['user-agent'];
    req.browser = browserInfo;

    next();
}
