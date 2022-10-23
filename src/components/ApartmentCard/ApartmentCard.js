import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { locations as cardLocations } from "../../data/mockData";
import SwipeableCard from "../SwipeableCard/SwipeableCard";

function ApartmentCard() {
  const [cards] = useState(cardLocations);

  if (!cards.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={2} md={4} lg={3}>
              <SwipeableCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ApartmentCard;
