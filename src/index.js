import { app } from "./app.js";
import axios from 'axios';

import dotenv from "dotenv";
import connectDB from "./db/index.js";
// axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// dotenv.config({ path: "../.env" });
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Db error", err));
