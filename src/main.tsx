import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import theme from "./theme";
import StrangeGrace from "./upperfields/StrangeGrace";
import navConstants from "./constants/navConstants"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to={navConstants.strangeGrace} />}>
            
          </Route>
          <Route path={navConstants.strangeGrace} element={<StrangeGrace/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
