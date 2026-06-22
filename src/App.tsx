import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import V1Page from "./variations/v1/page";
import V2Page from "./variations/v2/page";
import V3Page from "./variations/v3/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="/v3" element={<V3Page />} />
        <Route path="/" element={<Navigate to="/v1" replace />} />
        <Route path="*" element={<Navigate to="/v1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
