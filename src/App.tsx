import { BrowserRouter, Route, Routes } from "react-router-dom";
import V1Page from "./variations/v1/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V1Page />} />
        <Route path="*" element={<V1Page />} />
      </Routes>
    </BrowserRouter>
  );
}
