import { NextFunction, Request, Response } from "express";

interface iError {
    type: string;
    message: string;
}

export default function errorHandlerMiddleware(
  err: iError,
  req: Request,
  res: Response,
  next: NextFunction
) {
    console.log(err);
    if (err.type === 'NotFound'){
        return res.status(404).send(err.message);
    }
    if (err.type === 'Conflict'){
        return res.status(409).send(err.message);
    }
    if (err.type === 'Unprocessable'){
        return res.status(422).send(err.message);
    }
    if (err.type === 'Generic'){
        return res.status(400).send(err.message);
    }
    if (err.type === 'Unauthorized'){
        return res.status(401).send(err.message);
    }
    if (err.type === 'wrong-body-format'){
        return res.status(422).send(err.message);
    }
    return res.status(500).send("Untracked error");
}
