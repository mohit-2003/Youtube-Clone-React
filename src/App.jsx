import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { lightTheme, darkTheme } from "./utils/Theme"

const Container = styled.div`
display: flex;
`

const Wrapper = styled.div`
`

const Main = styled.div`
flex: 7;
background-color: ${({ theme }) => theme.bg};;
`
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
