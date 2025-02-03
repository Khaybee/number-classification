import { Request, Response } from "express";
import { errorHandler } from "../../utils/utils";
import { classifyNumberService } from "../services/classification.service";

export const classifyNumberController = async (req: Request, res: Response): Promise<Response | any> => {
    const number = req.query.number;

    if (!number) {
        return errorHandler(res, "Number is required", 400);
    }

    const parsedNumber = parseInt(number as string, 10);

    if (isNaN(parsedNumber)) {
        return errorHandler(res, number, 400);
    }

    try {

        const result = await classifyNumberService(parsedNumber)
        return res.status(200).json(result);

    }
    catch (error: any) {
        console.log("error classifying number:- ", error);
        return errorHandler(res, error.message || "Internal Server Error");
    }
}