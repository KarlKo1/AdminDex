import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    // In real apps make them required
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: {
      month: String,
      totalSales: Number,
      totalUnits: Number,
    },

    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
