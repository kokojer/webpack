import "./styles2.scss";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~/globalStyles";
import Home from "~/pages/Home";
import About from "~/pages/About";
import News from "~/pages/News";

const App = () => {
  const basePath = process.env.BASE_PATH ?? "";

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={`/${basePath}`}>
        <Routes>
          <Route path="*" element={<>404</>} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
