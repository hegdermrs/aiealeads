import { BrowserRouter, Route, Routes } from "react-router-dom";
import V1Page from "./variations/v1/page";
import WaitlistPage from "./variations/v1/waitlist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V1Page />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}
