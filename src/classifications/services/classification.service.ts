import { isArmstrongNumber, isPerfectNumber, isPrime, sumDigits } from "../../utils/utils";
import { IClassifyNumbersResponse } from "../interfaces";
import { getFunFact } from "../../external/numbers-api";

export const classifyNumberService = async(data: number): Promise<IClassifyNumbersResponse> => {
    try {
        const checkPrime = isPrime(data);
        const checkPerfect = isPerfectNumber(data);
        const digitDetails = sumDigits(data);
        const checkArmstrong = isArmstrongNumber(data);

        const funFact = await getFunFact(data);

        if (!funFact) {
            throw new Error("Numbers API failed to fetch fun fact")
        }

        let properties: string[] = []

        if (checkArmstrong) properties.push("armstrong");

        properties.push(digitDetails.is_even ? "even" : "odd");

        return {
            number: data,
            is_prime: checkPrime,
            is_perfect: checkPerfect,
            properties,
            digit_sum: digitDetails.sum,
            fun_fact: funFact,
        }

    } catch (error: any) {
        throw new Error(`Failed to classify number: ${error.message}`)
    }
}