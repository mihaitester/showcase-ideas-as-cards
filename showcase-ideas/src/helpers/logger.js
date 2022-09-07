const log = (level, message, object) => {
    // todo: implement log levels, have a global variable set up, and depending on its value show logs
    // todo: add a way to track where the printer was called, and write the filename and line number -> speeds up debugging a lot
    console.log(message + ": " + object)
    console.log(message + ": " + JSON.stringify(object, null, 2))
}

export default log;