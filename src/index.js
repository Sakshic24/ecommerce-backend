import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
axios.defaults.baseURL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// dotenv.config({ path: "../.env" });
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Db error", err));
