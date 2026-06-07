import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    stars: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 500,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const ReviewModel = model("reviews", ReviewSchema);

export default ReviewModel;
