# Book Management Application

This repository hosts a full-stack application facilitating book management. The backend, built with Spring Boot and integrated with MinIO for object storage, offers RESTful services. The Angular-based frontend provides a smooth user interface.

## Features

- Add new books with title, author, and cover image.
- View a list of all added books.
- (Any other features your application provides.)

## Technologies

- Backend: Spring Boot, MinIO for object storage
- Frontend: Angular
- Database: H2 (or specify if another database is used)

## Getting Started

### Prerequisites

- JDK 17
- Gradle (for backend)
- Node.js and npm (for frontend)
- Docker (for running MinIO)

### Backend Setup

1. Clone the repository.
2. In the root directory, run `gradle build` to build the backend project.
3. Launch the backend server with `gradle bootRun`.

### Frontend Setup

1. Navigate to the `frontend/book-manager-frontend` directory.
2. Run `npm install` to install the required dependencies.
3. Start the Angular development server with `ng serve`.
4. Open `http://localhost:4200` in your web browser to access the frontend.

### MinIO Setup

1. Make sure Docker is up and running.
2. Use the `docker-compose.yml` file at the root of the project to start MinIO.
3. The MinIO dashboard is available at `http://localhost:9001`.
