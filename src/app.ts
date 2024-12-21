import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use("/api", router);

  return app;
}

export default createApp;
