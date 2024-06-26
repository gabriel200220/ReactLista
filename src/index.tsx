import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRoutes from "./routes/Routes";
import { store } from "./modules";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <Provider store={store}>
        <CssBaseline />
        <AppRoutes />
    </Provider>
  </>
);