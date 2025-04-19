
# ts-node-api

A simple Node.js API built with TypeScript and Express.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/) (installed globally)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ts-node-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8080
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will run at `http://localhost:8080`.

### Scripts

- `npm run dev`: Starts the server in development mode with hot-reloading.
- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Starts the server in production mode.


## Example Routes

GET:

```sh
http://localhost:3000/api/example
```
POST:

```sh
http://localhost:3000/api/example
```

## Docker

```sh
docker build -t image-name .
```

```sh
docker run -d -p 8080:8080 --env-file .env image-name
```

## License

This project is licensed under the MIT License.
