import { ZodType } from "zod";
import { Request, Response, NextFunction } from "express";



export const validate = (schema: ZodType) =>(req: Request, res: Response,next:NextFunction)=>{

    const result = schema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json(
            {
                message: 'Validation Error',
                errors: result.error.flatten()
            }
        )
    }

    req.body = result.data
    next();
}