import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import OptionsTab from "./components/OptionsTab/OptionsTab";
import ApartmentCard from "./components/ApartmentCard/ApartmentCard";
import Footer from "./components/Footer/Footer";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import { displayOnDesktop } from "./themes/CommonStyles";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Navbar />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <ApartmentCard />
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
