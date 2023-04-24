import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { AuthProvider } from "./context/authContext";
import { ThemeProviderContext } from "./context/themeContext";
import { GlobalStyles } from "./global.styles";
import { Router } from "./routes/Router";
import { darkTheme, lightTheme } from "./styles/theme/Theme";

export function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
        <ThemeProviderContext>
          {/* <AuthProvider> */}
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          {/* </AuthProvider> */}
          <GlobalStyles />
        </ThemeProviderContext>
      </ThemeProvider>
    </div>
  )
}
