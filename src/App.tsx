import "./App.css";
import About from "./pages/About";
import Form from "./pages/Form";
import EventDescription from "./pages/EventDescription";
import { Box } from "@mui/material";
import Navbar from "./components/Navigation";
import UploadAndGallery from "./pages/UploadAndGallery";

function App() {
  return (
    <Box>
      <About />
      <EventDescription />
      <Form />
      <UploadAndGallery />
    </Box>
  );
}

export default App;
