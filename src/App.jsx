import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { CoinProvider } from "./context/CoinProvider";
function App() {
  return (
    <CoinProvider>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
        <Navigate to="home" replace />
      </BrowserRouter>
    </CoinProvider>
  );
}

export default App;
