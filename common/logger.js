/*
 * @Author: lijinrong
 * @Date: 2020-04-17 18:31:18
 * @LastEditors: lijinrong
 * @LastEditTime: 2020-04-17 18:34:28
 * @Description: file content
 */
const log4js = require('log4js')
log4js.configure({
    replaceConsole: true,
    appenders: {
        out: { type: 'stdout' },
        access: {
            type: 'dateFile',
            filename: 'logs/access.log',
            pattern: '-yyyy-MM-dd',
            category: 'http',
        },
        app: {
            type: 'file',
            filename: 'logs/app.log',
            maxLogSize: 10485760,
            numBackups: 3,
        },
        errorFile: {
            type: 'file',
            filename: 'logs/errors.log',
        },
        errors: {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: 'errorFile',
        },
    },
    categories: {
        default: { appenders: ['out', 'app', 'errors'], level: 'DEBUG' },
        http: { appenders: ['out', 'access'], level: 'DEBUG' },
    },
})

function getLogger(type) {
    return log4js.getLogger(type)
}

exports.getLogger = getLogger
