import accessEnv from "#root/helper/accessEnv";
import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";


const PORT = parseInt(accessEnv("PORT","7101"), 10)

const startServer = () => {
    const app = express()

    app.use(bodyParser.json())

    app.use(
        cors({
            origin: (origin, cb) => cb(null, true),
            credentials: true,
        })
    )

    app.use((err: Error, req: Request, res: Response, next: NextFunction ) => {
        return res.status(500).json({message: err.message})
    })

    app.listen(PORT, "0.0.0.0", () => {
        console.info(`User service listening on ${PORT}`);
    });
} 

export default startServer