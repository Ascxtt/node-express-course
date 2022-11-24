const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json());

//Routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);
app.use("/api/v1/tasks/:id", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`SERVER IS LISTENING ON PORT ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
