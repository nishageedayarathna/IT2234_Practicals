## 1. Create an endpoint to retrieve all data from the User, Project, and Task collections. 
Implement this task with code reusability.

services-->getall.js

<img width="960" alt="Q1_1" src="https://github.com/user-attachments/assets/aae03431-7a20-4963-b309-e5a1035c3869" />

add to all routes like below

<img width="297" alt="Q1_2" src="https://github.com/user-attachments/assets/dfccaf82-b38c-4cbc-a80e-c4db73c9744c" />

Outputs:

<img width="674" alt="3 users" src="https://github.com/user-attachments/assets/809452db-c42e-4d8c-8cd0-edd118fe6662" />

<img width="674" alt="2 projects" src="https://github.com/user-attachments/assets/daec9c73-e2be-4b2f-b3e2-934169101bbb" />

<img width="678" alt="1 tasks" src="https://github.com/user-attachments/assets/0f123eb0-75d9-4284-8164-3b8adc412578" />

## 2. Create an endpoint to retrieve all tasks associated with a specific project ID.
     
Endpoint: GET /project/{projectId}/tasks

<img width="675" alt="Q2" src="https://github.com/user-attachments/assets/cbfb9094-fde8-457c-a165-b95086653fb7" />

## 3. Create an endpoint to retrieve the manager of a given project ID. Return only the 
project name, manager name, and email address.

Endpoint: GET /project/{projectId}/manager

<img width="675" alt="q3" src="https://github.com/user-attachments/assets/723b365a-1783-4020-b0b8-680860ebdcb2" />

## 4. Create an endpoint to retrieve the tasks and the users they are assigned to for a 
specific project ID. The result should contain only the task name and user name.

Endpoint: GET /project/{projectId}/tasks-users

<img width="671" alt="Q4" src="https://github.com/user-attachments/assets/d75c4705-c918-4ef8-b79d-b067095fdd51" />

## 5. Ensure your API handles errors gracefully and returns appropriate HTTP status codes.

<img width="960" alt="Q5" src="https://github.com/user-attachments/assets/c0c12bc4-b07f-4133-a947-366486d5310a" />

## 6. Include validation for the request parameters where necessary.
