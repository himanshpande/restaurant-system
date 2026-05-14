import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import tableRoutes from "./routes/table.routes";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use("/tables", tableRoutes);
app.use("/products", productRoutes);

app.get("/", (_, res) => {
  res.send("Backend Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});