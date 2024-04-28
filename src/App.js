import React from "react";
import { UserProvider } from "./context/UserContext";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList"; // Certifique-se de que o caminho está correto
import GlobalStyle from "./styles/GlobalStyles";

const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <div className="container">
        <UserSearch />
        <UsersList />
      </div>
    </UserProvider>
  );
};

export default App;
