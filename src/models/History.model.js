import { model, Schema } from "mongoose";

const HistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    products: [
      { type: Schema.Types.ObjectId, ref: "products" },
      { type: Schema.Types.ObjectId, ref: "services" },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
