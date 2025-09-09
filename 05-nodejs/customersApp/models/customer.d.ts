import { Schema } from "mongoose";
interface IOrder {
    description: string;
    amount?: number;
}
interface ICustomer {
    name: string;
    industry?: string;
    orders?: IOrder[];
}
declare const Customer: import("mongoose").Model<ICustomer, {}, {}, {}, import("mongoose").Document<unknown, {}, ICustomer, {}, import("mongoose").DefaultSchemaOptions> & ICustomer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<ICustomer, import("mongoose").Model<ICustomer, any, any, any, import("mongoose").Document<unknown, any, ICustomer, any, {}> & ICustomer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICustomer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICustomer>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ICustomer> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Customer;
//# sourceMappingURL=customer.d.ts.map