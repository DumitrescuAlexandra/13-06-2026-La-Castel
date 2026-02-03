import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function UploadAndGallery() {
  const [buttonPosition, setButtonPosition] = useState({
    top: "70%",
    left: "50%",
  });
  const [showWarning, setShowWarning] = useState(false);

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 60) + 20; // 20% - 80%
    const randomLeft = Math.floor(Math.random() * 60) + 20;

    setButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    setShowWarning(true);
  };

  return (
    <Box
      id="gallery"
      data-section="gallery"
      sx={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src="https://i.postimg.cc/8sgkkby2/Paper-4.jpg"
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Overlay content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "serif",
            mb: 2,
          }}
        >
          Galeria foto
        </Typography>

        <Typography variant="h6" sx={{ maxWidth: 600, mb: 1 }}>
          Aici vom adauga un link catre albumul cu toate fotografiile realizate
          in ziua evenimentului.
        </Typography>

        {showWarning && (
          <Typography
            variant="h5"
            sx={{ color: "red", fontWeight: 500, mt: 1 }}
          >
            Va rugam sa aveti rabdare. Inca nu avem fotografiile!
          </Typography>
        )}

        {/* Runaway button */}
        <Button
          variant="contained"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
          sx={{
            position: "absolute",
            top: buttonPosition.top,
            left: buttonPosition.left,
            transform: "translate(-50%, -50%)",
            transition: "top 0.3s ease, left 0.3s ease",
            backgroundColor: "#D4AF37",
            color: "white",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#c9a635", // slightly darker gold
            },
          }}
        >
          Acceseaza Drive
        </Button>
      </Box>
    </Box>
  );
}

export default UploadAndGallery;
