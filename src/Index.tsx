import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "~/globalStyles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);
const basePath = process.env.BASE_PATH ?? "";
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter basename={`/${basePath}`}>
      <Routes>
        <Route path="*" element={<>404</>} />
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
);
