let LOG_LEVEL = "info"

const log_levels = {
    'debug': 0,
    'info': 1,
    'warning': 2,
    'error': 3,
    'exception': 4,
    'critical': 5
}

const log = (level, message, object) => {
    // todo: implement log levels, have a global variable set up, and depending on its value show logs
    // todo: add a way to track where the printer was called, and write the filename and line number -> speeds up debugging a lot
    if (log_levels[LOG_LEVEL] <= log_levels[level]) {
        console.log(message + ": " + object)
        console.log(message + ": " + JSON.stringify(object, null, 2))
    }
}

export default log;