import { Box, Container, Tabs, Tab, tabsClasses, Button } from "@mui/material";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { locationsBar } from "../../data/mockData";

function OptionsTab() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
        >
          {locationsBar.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            border: "1px solid #ddd",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 2,
            textTransform: "capitalize",
            py: 1,
            color: "theme.palatte.text.primary",
          }}
        >
          <FaFilter /> Filters
        </Button>
      </Box>
    </Container>
  );
}

export default OptionsTab;
