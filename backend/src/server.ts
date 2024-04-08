import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
import boutiquesRouter from './routers/boutiques.router';
import breadRouter from './routers/bread.router'
import cosmeticsRouter from './routers/cosmetics.router';
import furnituresRouter from './routers/furnitures.router';
import homesRouter from './routers/homes.router';
import marketsRouter from './routers/markets.router';
import pharmaciRouter from './routers/pharmaci.router';
import shopRouter from './routers/shop.router';
import supermarketRouter from './routers/supermarket.router';
import wigRouter from './routers/wig.router';
import blogRouter from './routers/blog.router';
import alcoholRouter from './routers/alcohol.router';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/boutiques", boutiquesRouter);
app.use("/api/bakerys", breadRouter);
app.use("/api/cosmetics", cosmeticsRouter);
app.use("/api/furnitures", furnituresRouter);
app.use("/api/reals", homesRouter);
app.use("/api/markets", marketsRouter);
app.use("/api/pharms", pharmaciRouter);
app.use("/api/sweets", shopRouter);
app.use("/api/supermarkets", supermarketRouter);
app.use("/api/hairs", wigRouter);
app.use("/api/orders", orderRouter);
app.use("/api/blog",blogRouter);
app.use("/api/alcohol",alcoholRouter);

app.use(express.static('Public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})