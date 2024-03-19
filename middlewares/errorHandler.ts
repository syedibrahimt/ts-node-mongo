import { NextFunction, Response, Request } from 'express'
import { STATUS_CODES } from '../config/constants';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let errorTitle: String = 'Server error'
    switch (res.statusCode) {
      case STATUS_CODES.BAD_REQUEST:
        errorTitle = "Bad request"
        break
      case STATUS_CODES.FORBIDDEN:
        errorTitle = "Forbidden request"
        break
      case STATUS_CODES.NOT_FOUND:
        errorTitle = "Not Found"
        break
      case STATUS_CODES.SERVER_ERROR:
        errorTitle = "Server Error"
        break
      case STATUS_CODES.UNAUTHORISED:
        errorTitle = "UnAuthorised request"
        break
      default:
        break
    }
    res.json({
        title: errorTitle,
        stackTrace: err.stack,
        message: err.message
    })
}