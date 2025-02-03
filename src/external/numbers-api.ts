import axios from "axios"

const apiUrl = process.env.NUMBERS_API_BASE_URL

export const getFunFact = async(number: number): Promise<string> => {
    try {
        const funFact = await axios.get(`${apiUrl}/${number}/math`)
                
        return funFact.data;
    } catch (error: any) {
        throw new Error(`Could not get fun fact from numbers api: ${error.message ? error.message : error}`)
    }
}