const log = (level, message, object) => {
    // todo: implement log levels, have a global variable set up, and depending on its value show logs
    console.log(message + ": " + object)
    console.log(message + ": " + JSON.stringify(object, null, 2))
}

export default log;