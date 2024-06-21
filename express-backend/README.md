# Express TypeScript Backend

## Description

This is a simple backend server built with Express and TypeScript. It provides three endpoints: `/ping`, `/submit`, and `/read`. Submissions are stored in a JSON file (`db.json`).

## Endpoints

- `GET /ping`: Always returns `{ success: true }`.
- `POST /submit`: Accepts a JSON body with `name`, `email`, `phone`, `github_link`, and `stopwatch_time`.
- `GET /read?index=0`: Returns the submission at the given index (0-based).

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Yashvi30/express-backend.git
   cd express-backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the server:
   ```sh
   npm run start
   ```

The server will start on `http://localhost:3000`.
