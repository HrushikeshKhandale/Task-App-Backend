# Task APP

A simple RESTful API to manage tasks.

## Endpoints

- `GET /tasks`: Retrieve a list of all tasks.
  - **Response**:
   json
    [
        {
            "id": 1,
            "title": "Task 1",
            "description": "Description of Task 1"
        }
    ]
   

- `GET /tasks/:id`: Retrieve a specific task by ID.
  - **Response**:
   json
    {
        "id": 1,
        "title": "Task 1",
        "description": "Description of Task 1"
    }
   

- `POST /tasks`: Create a new task.
  - **Request Body**:
   json
    {
        "title": "New Task",
        "description": "Description of the new task"
    }
   

  - **Response**:
   json
    {
        "id": 2,
        "title": "New Task",
        "description": "Description of the new task"
    }
   

- `PUT /tasks/:id`: Update an existing task by ID.
  - **Request Body**:
   json
    {
        "title": "Updated Task",
        "description": "Updated description of the task"
    }
   

  - **Response**:
   json
    {
        "id": 1,
        "title": "Updated Task",
        "description": "Updated description of the task"
    }
   

- `DELETE /tasks/:id`: Delete a task by ID.
  - **Response**: 204 No Content

## Running the API

 Steps to run the API locally:

1. Install dependencies:
    
    npm install
    

2. Start the server:
    
    node server.js
    

3. The API will be available at `http://localhost:3000`.







### Report

**Approach and Algorithm Choices**

1. **Project Structure**: The project structure is kept simple and modular. Routes are separated into their own file for clarity and maintainability. The main application file (`server.js`) is responsible for setting up the server and middleware.

2. **Endpoints Implementation**:
    - **GET /tasks**: This endpoint retrieves all tasks stored in memory. It responds with a 200 status code and a JSON array of tasks.
    - **GET /tasks/:id**: This endpoint retrieves a task by its ID. If the task is not found, it responds with a 404 status code and an error message.
    - **POST /tasks**: This endpoint creates a new task. It validates the request body to ensure both title and description are provided, responding with a 400 status code if validation fails. It assigns a unique ID to the new task and responds with a 201 status code and the created task.
    - **PUT /tasks/:id**: This endpoint updates an existing task by its ID. It validates the request body similar to the POST endpoint. If the task is not found, it responds with a 404 status code.
    - **DELETE /tasks/:id**: This endpoint deletes a task by its ID. If the task is not found, it responds with a 404 status code. On successful deletion, it responds with a 204 status code.

3. **Validation**: The POST and PUT endpoints include basic validation to ensure that the title and description fields are present in the request body. This helps prevent incomplete data from being processed.

4. **Error Handling**: The API handles various error scenarios gracefully by returning appropriate HTTP status codes and error messages. This ensures that clients can understand and handle errors effectively.

5. **Data Storage**: Tasks are stored in an in-memory array, which is suitable for the scope of this assignment. This approach is simple and avoids the complexity of setting up a database.

The implementation ensures that the API meets the basic requirements for managing tasks while being easy to understand and extend.
