import React from "react";
import Landing from "./landing";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
