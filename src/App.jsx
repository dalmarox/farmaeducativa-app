import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Farma Educativa"} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos a Farma Educativa"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};