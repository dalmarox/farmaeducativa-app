// https://react-icons.github.io/react-icons

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer message={"Bienvenidos a"} />
    </>
  );
};