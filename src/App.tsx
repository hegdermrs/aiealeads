import { BrowserRouter, Route, Routes } from "react-router-dom";
import V1Page from "./variations/v1/page";
import EditPage from "./content/EditPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V1Page />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="*" element={<V1Page />} />
      </Routes>
    </BrowserRouter>
  );
}
