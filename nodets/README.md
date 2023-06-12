<h1 align="center">Backend Guide</h1>

<h2>Description</h2>

- This is the backend of the Student Management System.
- Built using Node.ts and Express and deployed on Render. The backend is connected to a MongoDB database and includes
  important middlewares for the admin and class monitors registered in the application that was to be implemented which are: 
  - The admin && monitor can view all the students in the database and can also view the profile of each student. 
  - The admin && monitor can also update and delete the student data.
  - Students who are not admins or class monitors can only view other student's profiles and their profiles.

- Link to deployed api.
  - <a href="https://student-management-system-1rxu.onrender.com/">https://student-management-system-1rxu.onrender.com/</a>

<h2>Installation</h2>

- Clone the repository/Download Zip file.
- Navigate to the root folder of the project. (/src) and locate the index.ts file
- Include your MongoDB connection string in the mongoose.connect() function.
- Run npm install to install all the dependencies.
- Run npm start to start the server.