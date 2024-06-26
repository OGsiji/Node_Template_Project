const express = require("express");
const errorHandler =require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

connectDb();
const app = new express();

const port = 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port,() =>  {
    console.log(`Server running on port ${port}`);
});