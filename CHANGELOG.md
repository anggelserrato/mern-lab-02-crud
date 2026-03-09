# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-03-08

### Added

- Complete Task Manager UI with CRUD operations
- React components for task management:
  - `TaskTable.jsx` - Display tasks in a table format
  - `TaskForm.jsx` - Form to create new tasks
  - `TaskRow.jsx` - Individual task row with edit and delete actions
- Custom `useTasks` hook for state management and API integration
- Task service layer with fetch functions for all CRUD operations
- Axios client configuration for API communication
- Sonner toast notifications for user feedback (create, update, delete operations)
- Warning alert banner displaying data persistence limitation
- Integration of shadcn UI components (Input, Button, Checkbox, Table, Alert)
- New dependencies:
  - `axios@^1.13.6` - HTTP client
  - `sonner@^2.0.7` - Toast notifications

### Technical Details

- Implemented full CRUD operations on frontend:
  - Task creation with form validation
  - Task status updates via checkbox (PUT requests)
  - Task deletion via delete button (DELETE requests)
  - Real-time state management with React hooks
- Responsive UI with Tailwind CSS styling
- API client configuration with timeout and headers

## [0.1.0] - 2026-02-27

### Added

- Initial project setup
- Express server with CRUD endpoints:
  - GET `/api/tasks` - Retrieve all tasks
  - POST `/api/tasks` - Create a new task
  - GET `/api/tasks/:id` - Retrieve a specific task
  - PUT `/api/tasks/:id` - Update a task
  - DELETE `/api/tasks/:id` - Delete a task
- Status routes (/, /about, /hello)
- Input validation using Joi schemas
- Middleware setup (Morgan, Helmet, CORS)
- In-memory data storage with automatic ID generation (timestamp-based)
- Error handling and appropriate HTTP status codes

[Unreleased]: https://github.com/anggelserrato/mern-lab-02-crud/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/anggelserrato/mern-lab-02-crud/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/anggelserrato/mern-lab-02-crud/releases/tag/v0.1.0
