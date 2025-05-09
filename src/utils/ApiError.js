class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.sucess = false;
        this.error = errors

        if(statck){
            this.stack = statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export { ApiError }