## Number Classification API

Overview
This API classifies a given number by checking its various mathematical properties and provides a fun fact about the number. The API can classify the number based on its primality, perfection, Armstrong status, parity (odd/even), and return a fun fact fetched from the Numbers API.

## Features

Prime Check: Determines if the number is prime.

Perfect Number Check: Determines if the number is a perfect number.

Armstrong Number Check: Determines if the number is an Armstrong number.

Parity (Odd/Even): Identifies whether the number is odd or even.

Fun Fact: Fetches a fun fact from the Numbers API.

# API Endpoint

GET /api/classify-number

This endpoint accepts a query parameter number and returns a JSON response containing the classification of the number.

Request

GET /api/classify-number?number=<your-number>

- number: required (integer)

    The number to classify.

Response (200 OK)

json

{

  "number": 371,

  "is_prime": false,

  "is_perfect": false,

  "properties": ["armstrong", "odd"],

  "digit_sum": 11,

  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"

}

Response (400 Bad Request - Invalid Input)
json

{

  "number": "abc",

  "error": true

}

Response (400 Bad Request - Missing Input)

json

{

  "number": "Number is required",

  "error": true

}

## Setup and Installation

Prerequisites

Ensure you have Node.js installed on your system. You can download it from nodejs.org.

# Steps

Clone the repository:

git clone https://github.com/your-username/number-classification.git

cd number-classification

Install dependencies:

npm install

Start the server:

npm start or npm run dev

The server will be running at http://localhost:3000.

Test the API

You can test the API using a tool like Postman or simply through your browser. Example request:


GET http://localhost:3000/api/classify-number?number=371

Error Handling

The API returns proper error responses for invalid inputs:

400 Bad Request: When the number parameter is missing, or if the input is not a valid number.

500 Internal Server Error: If something goes wrong while processing the request.

Technologies Used

Node.js: JavaScript runtime for building the API.

Express.js: Web framework for Node.js.

Axios: HTTP client to fetch fun facts from the Numbers API.