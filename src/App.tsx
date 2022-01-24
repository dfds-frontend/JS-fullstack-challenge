import { Global, css } from "@emotion/react";
import React from "react";
import { Navbar } from "./components/Navbar";
import Grid from "@mui/material/Grid";
import { SailingTimeTable } from "./components/SailingTimeTable/SailingTimeTable";
import { SailingTimeContextProvider } from "./contexts/SailingTimeContext";
import { SailingTimeFilter } from "./components/SailingTimeFilter";
import { CreateSailingForm } from "./components/CreateSailingForm";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Navbar />
      <SailingTimeContextProvider>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <SailingTimeTable />
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SailingTimeFilter />
              <CreateSailingForm />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </SailingTimeContextProvider>
    </>
  );
}

export default App;
