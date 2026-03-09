# MERN Lab 02 - CRUD en Memoria

A simple MERN (MongoDB Express React Node.js) application demonstrating CRUD operations with in-memory data storage. This is a learning project from Lab 02.

## Project Structure

```
mern-lab-02-crud/
├── client/                 # React frontend with Vite
│   ├── src/
│   │   ├── components/     # React components
│   │   │   └── tasks/      # Task-related components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service layer
│   │   ├── api/            # Axios configuration
│   │   └── lib/            # Utility functions
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   ├── middlewares/    # Custom middleware
│   │   ├── validators/     # Input validation schemas
│   │   └── index.js        # Server entry point
│   └── package.json
└── docs/                   # Documentation files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd mern-lab-02-crud
```

2. **Install server dependencies:**

```bash
cd server
npm install
```

3. **Install client dependencies:**

```bash
cd ../client
npm install
```

### Running the Application

1. **Start the server** (from the `server` directory):

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your environment variables).

2. **Start the client** (from the `client` directory, in another terminal):

```bash
npm run dev
```

The client will start on `http://localhost:5173`.

3. **Open your browser** and navigate to `http://localhost:5173`

## API Endpoints

### Status Routes

- **GET** `/` - Health check endpoint
- **GET** `/about` - About endpoint
- **GET** `/hello` - Hello endpoint

### Task Routes

#### Get all tasks

```
GET /api/tasks
```

Response:

```json
{
  "data": [
    {
      "id": "1234567890",
      "title": "Buy groceries",
      "completed": false
    }
  ],
  "message": "Tasks retrieved successfully"
}
```

#### Get a specific task

```
GET /api/tasks/:id
```

#### Create a new task

```
POST /api/tasks
Content-Type: application/json

{
  "title": "Buy groceries",
  "completed": false
}
```

- `title` (required): String, 1-100 characters
- `completed` (optional): Boolean, defaults to false

Response:

```json
{
  "data": {
    "id": "1234567890",
    "title": "Buy groceries",
    "completed": false
  },
  "message": "Task created successfully"
}
```

#### Update a task

```
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Buy groceries and cook lunch",
  "completed": true
}
```

- `title` (optional): String, 1-100 characters
- `completed` (optional): Boolean

#### Delete a task

```
DELETE /api/tasks/:id
```

## Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- ✅ Real-time UI updates with React hooks
- ✅ Toast notifications for user feedback (Sonner)
- ✅ Responsive design with Tailwind CSS and shadcn UI
- ✅ Server-side input validation with Joi
- ✅ Error handling and HTTP status codes
- ✅ CORS enabled for client-server communication

## Frontend Features

- Task table with title, status, and actions columns
- Task creation form with validation
- Checkbox to mark tasks as completed
- Delete button to remove tasks
- Toast notifications for all operations
- Warning banner about data persistence

## Limitations

⚠️ **Important**: This application stores data in memory only. **Data does not persist when the server is restarted.**

This is an intentional limitation for the learning lab. To persist data permanently, you would need to:

- Connect to a MongoDB database
- Implement database models and queries
- Add authentication and authorization
- Deploy to a production environment

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- shadcn UI
- Axios
- Sonner (toast notifications)
- React Hooks

### Backend

- Express.js
- Node.js
- Joi (validation)
- Helmet (security headers)
- Morgan (logging)
- CORS

## Security Notes

- CORS is restricted to `http://localhost:5173`
- Helmet middleware is enabled for security headers
- Input validation with Joi schemas
- Error messages are handled appropriately

## Scripts

### Server

```bash
npm run dev      # Development with auto-reload
npm run node     # Run once
```

### Client

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Contributing

This is a learning lab project. Feel free to fork and experiment!

## License

ISC
