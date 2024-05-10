import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="px-[120px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
