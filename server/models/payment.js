const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema(
  {
    paystack_order_id: {
      type: String,
      required: true,
      unique: true,
    },
    paystack_payment_id: {
      type: String,
      required: true,
      unique: true,
    },
    payment_signature: {
      type: String,
      required: true,
      unique: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // courseId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Course",
    //   required: true,
    // },
    // amount: {
    //   type: Number,
    //   required: true,
    // },
    // paymentDate: {
    //   type: Date,
    //   default: Date.now,
    // },
    // paymentStatus: {
    //   type: String,

    //   enum: ["pending", "completed", "failed"],
    //   default: "pending",
    // },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Payment", paymentSchema);
