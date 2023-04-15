import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "~/globalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
