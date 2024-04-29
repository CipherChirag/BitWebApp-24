import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace YOUR_FRONTEND_PORT with the port of your frontend application
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import exam routes
import examRouter from "./routes/exam.routes.js";
app.use("/api/v1/exam", examRouter);

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };
