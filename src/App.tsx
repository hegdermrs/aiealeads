import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppDane from "./AppDane";
import AppHormozi from "./hormozi/AppHormozi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/maxwell" element={<AppDane />} />
        <Route path="/hormozi" element={<AppHormozi />} />
        <Route path="/" element={<Navigate to="/maxwell" replace />} />
        <Route path="*" element={<Navigate to="/maxwell" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
