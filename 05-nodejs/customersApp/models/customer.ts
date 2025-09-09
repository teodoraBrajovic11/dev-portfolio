import { Schema, model } from "mongoose";

interface IOrder {
  description: string;
  amount?: number;
}

interface ICustomer {
  name: string;
  industry?: string;
  orders?: IOrder[];
}

const customerSchema = new Schema<ICustomer>({
  name: {
    type: String,
    required: true,
  },
  industry: String,
  orders: [
    {
      description: String,
      amount: Number,
    },
  ],
});

const Customer = model("Customer", customerSchema);
export default Customer;
