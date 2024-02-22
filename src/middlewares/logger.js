const logger = (req, res, next) => {
    console.log(`${req.method} - ${req.originalUrl}`)
    if(req.body) {
        console.log (req.body)
    }
    next()
}

export default logger