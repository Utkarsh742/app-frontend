import React from "react";

import { Box, Typography, Container, Button } from "@mui/material";
function Main() {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "60vh",
        }}
      >
        <Typography variant="h2" sx={{fontWeight: 600 ,fontFamily:"cursive"}}>Home Page</Typography>
        <Typography
          variant="subtitle1"
          sx={{
            width: "auto",
            textAlign: "center",
            my: 4,
            fontSize: "1.2rem",
            fontWeight: 300,
            fontFamily:"cursive"
          }}
        >
          We At Lepses Are Committed To Providing You With The Best Quality products carefully engineered and selected from the best suppliers in the market.
        </Typography>
       
      </Container>
    </Box>
  );
}

export default Main;
