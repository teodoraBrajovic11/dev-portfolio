import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Customer from "../models/customer.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());
mongoose.set("strictQuery", false);
if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION || "";
// const customers = {
//   name: "Caleb",
//   industry: "Music",
//   favoriteColors: ["red", "blue"],
//   favoriteNumbers: [5, 3, 7],
//   favoritePeople: [
//     {
//       name: "mom",
//       relationship: "parent",
//     },
//   ],
// };
// const customer = new Customer({
//   name: "caleb",
//   industry: "marketing",
// });
app.get("/", (req, res) => {
    res.send("Welcome!!");
});
app.get("/api/customers", async (req, res) => {
    try {
        const result = await Customer.find();
        res.json({ customers: result });
    }
    catch (e) {
        res.status(500).json({ error: e.message });
    }
});
app.get("/api/customers/:id", async (req, res) => {
    console.log({ requestParams: req.params, requestQuery: req.query });
    try {
        const { id: customerId } = req.params;
        console.log(customerId);
        const customer = await Customer.findById(customerId);
        console.log(customer);
        if (!customer) {
            res.status(404).json({ error: "User not found" });
        }
        else {
            res.json({ customer });
        }
    }
    catch (e) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
app.put("/api/customers/:id", async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findOneAndReplace({ _id: customerId }, req.body, { new: true });
        res.json({ customer });
    }
    catch (e) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
app.post("/api/customers", async (req, res) => {
    console.log(req.body);
    const customer = new Customer(req.body);
    try {
        await customer.save();
        res.status(201).json({ customer });
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
});
app.patch("/api/customers/:id", async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findOneAndUpdate({ _id: customerId }, req.body, { new: true });
        res.json({ customer });
    }
    catch (e) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
app.patch("/api/orders/:id", async (req, res) => {
    console.log(req.params.id);
    const orderId = req.params.id;
    req.body._id = orderId;
    try {
        const result = await Customer.findOneAndUpdate({ "orders._id": orderId }, { $set: { "orders.$": req.body } }, { new: true });
        console.log(result);
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Something went wrong" });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});
app.get("/api/orders/:id", async (req, res) => {
    const orderId = req.params.id;
    try {
        const result = await Customer.findOne({ "orders._id": orderId });
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Order not found" });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});
app.post("/", (req, res) => {
    res.send("This is a post request.");
});
app.delete("/api/customers/:id", async (req, res) => {
    try {
        const customerId = req.params.id;
        const result = await Customer.deleteOne({ _id: customerId });
        res.json({ deletedCount: result.deletedCount });
    }
    catch (e) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
const start = async () => {
    try {
        await mongoose.connect(CONNECTION);
        app.listen(PORT, () => {
            console.log("App listening on port" + PORT);
        });
    }
    catch (e) {
        console.log(e.message);
    }
};
start();
//# sourceMappingURL=app.js.map