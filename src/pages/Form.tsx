import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navigation";

function Form() {
  return (
    <Box
      id="rsvp"
      data-section="rsvp"
      sx={{ width: "100%", height: "100dvh", overflow: "hidden" }}
    >
      <Box
        component="img"
        src="https://i.postimg.cc/8sgkkby2/Paper-4.jpg"
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          zIndex: 1,
          transform: "rotate(180deg)",
        }}
      />
      <Navbar />
    </Box>
  );
}

export default Form;
