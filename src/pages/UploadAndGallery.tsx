import { Box } from "@mui/material";
import Navbar from "../components/Navigation";

function UploadAndGallery() {
  return (
    <Box
      id="gallery"
      data-section="gallery"
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
        }}
      />
      <Navbar />
    </Box>
  );
}

export default UploadAndGallery;
