import { Response, Request } from "express";


export function errorHandler(res: Response, input: any, code: number = 500) {
    res.status(code).json({
      number: input,
      error: true,
    })
  }

export function isArmstrongNumber(num: number): boolean {
    const positiveNum = Math.abs(num);
    let sum = 0;
    let temp = positiveNum;
    const power = Math.floor(Math.log10(positiveNum)) + 1;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, power);
        temp = Math.floor(temp / 10);
    }

    return sum === positiveNum;
}

export function isPrime(num: number): boolean {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

export function isPerfectNumber(num: number): boolean {
    if (num <= 1) return false;

    let sum = 1;
    const sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }

    return sum === num;
}

export function sumDigits(num: number) {
    const sum = Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + +digit, 0);

    const isEven = sum % 2 === 0;
    return { sum, is_even: isEven, is_odd: !isEven };
}


// export function sumDigits(num: number) {
//     const absoluteValue = Math.abs(num);  // Work with the absolute value for digit extraction
//     const sum = absoluteValue
//         .toString()
//         .split('')
//         .reduce((sum, digit) => sum + +digit, 0);

//     // If the number is negative, we negate the sum
//     const finalSum = num < 0 ? -sum : sum;

//     const isEven = finalSum % 2 === 0;
//     const isOdd = !isEven;

//     return { sum: finalSum, is_even: isEven, is_odd: isOdd };
// }
