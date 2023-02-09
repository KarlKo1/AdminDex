import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import InsightChart from "components/InsightChart";

const Insight = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="INSIGHT" subtitle="Insight of Sales By Category" />
      <Box mt="40px" height="75vh">
        <InsightChart />
      </Box>
    </Box>
  );
};

export default Insight;
