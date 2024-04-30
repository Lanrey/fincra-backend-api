# Node.js RESTful API with TypeScript and MongoDB

This project is a simple RESTful API built with Node.js and TypeScript, using MongoDB as the database. It provides endpoints to create and manage products in a store.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Credit a user wallet.
- Debit a user wallet.
- Check user balance.
- MongoDB for efficient data storage.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB server running locally or provide a connection URI.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lanrey/fincra-backend-api
   ```
   
2. Install dependencies:

   ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
```
PORT=3000

MONGO_URI=mongodb://localhost:27017/fincra_backend_test

```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Navigate to `http://localhost:3000/` to access the API.


## Endpoints

| Method | Endpoint           | Description                           | Authentication |
| ------ | ------------------ | ------------------------------------- | -------------- |
| POST   | `/api/wallet/credit`   | Credit a user wallet                   | No             |
| POST   | `/api/wallet/debit`      | Debit a user wallet           | No             |
| GET    | `api/wallet/balance`        | Get wallet balance of user                     | No           |

[Postman Documentation link](https://documenter.getpostman.com/view/23325006/2sA3JDhkaJ)
[Live API](https://fincra-backend-api.onrender.com)




## Environment
Create a .env file in the root directory and add the following environment variables:
```bash
NODE_ENV=DEV
MONGO_URI_DEV=<A hosted mongodb database>
JWT_SECRET=<secret>
```


```bash
## Technical Documentation for Wallet System

### Overview

The wallet system is a RESTful API developed using Node.js and TypeScript. It provides endpoints to credit, debit, and retrieve the balance from a user-specific digital wallet. The system uses MongoDB for data persistence, ensuring robust and scalable storage of wallet balances.

### System Architecture

#### Technologies Used

- **Node.js**: Chosen for its non-blocking I/O model which is ideal for data-intensive real-time applications that run across distributed devices.
- **TypeScript**: Provides static typing to ensure reliability and predictability of the code, which is crucial for financial transactions.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **MongoDB**: A NoSQL database known for its high performance, high availability, and easy scalability.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js that provides a straight-forward, schema-based solution to model application data.
- **Express-validator**: Middleware that uses a set of comprehensive validators and sanitizers to validate and sanitize data coming from the client side.

### API Design

The API consists of three main endpoints:

1. **POST /wallet/credit**: Credits an amount to the user’s wallet.
2. **POST /wallet/debit**: Debits an amount from the user’s wallet.
3. **GET /wallet/balance**: Retrieves the current balance of the user’s wallet.

Each endpoint uses validation middleware to ensure the integrity and correctness of the input data before processing.

### Concurrency Handling

To manage concurrency effectively and prevent race conditions during credit and debit operations, we used the `async-mutex` package. This package provides mutual exclusion control (mutex) which ensures that only one operation can manipulate the wallet balance at a time, thus maintaining data consistency.

### Data Validation

Input validation is implemented using `express-validator`. This ensures that all incoming data on critical fields (`userId` and `amount`) adheres to expected formats and meets defined constraints (e.g., `amount` must be a positive number). This validation step prevents common data errors and security issues such as injection attacks.

### Error Handling

Robust error handling is integrated throughout the application. Each endpoint is capable of responding with appropriate HTTP status codes and error messages that describe issues in a clear and actionable manner. This ensures that the client-side can properly handle errors and provide feedback to the user.

### Security Measures

Basic security measures implemented include:
- **Input Validation**: Ensures all incoming data is correct and safe to process.
- **Environment Variables**: Sensitive information such as database credentials are stored in environment variables, not in the codebase.

### Documentation and Testing

- **Inline Comments**: The codebase includes detailed comments explaining the purpose and logic of code blocks, functions, and modules.
- **API Documentation**: Created using Postman, providing a convenient way to interact with the API during development and testing phases.

```
