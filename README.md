# The Luanya Blog

A simple Blog with an easy interface for posting and deleting blogs.

## Technologies Used

- React for the development of the interface
- CSS for styling
- JSON server to simulate an API for storing and retriving data.

## How to run the project

1. Clone the repository:
   ```bash
   git clone https://github.com/luarev/luanya-blog.git
   cd luanya-blog
   ```
   
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the API server (JSON Server):
   ```bash
   npx json-server --watch data/db.json --port 8000
   ```
   
4. Start the React application:
   ```bash
   npm run start
   ```

5. Open your browser and go to ```bash http://localhost:3000.```
