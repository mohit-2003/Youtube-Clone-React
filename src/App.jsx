import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { lightTheme, darkTheme } from "./utils/Theme"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from "./pages/Video";

const Container = styled.div`
display: flex;
`

const Wrapper = styled.div`
  padding: 22px 96px;
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
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Routes>

            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
