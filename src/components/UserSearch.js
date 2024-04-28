import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const Message = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

const UserSearch = () => {
  const { state, dispatch } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = () => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://dummyjson.com/users", true);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          dispatch({ type: "SET_USERS", payload: response.users });
          setMessage("Usuários carregados da API conectados com sucesso.");
        } else {
          setMessage("Erro ao conectar a API.");
        }
      };
      xhr.onerror = () => setMessage("Erro de conexão.");
      xhr.send();
    };
    fetchUsers();
  }, [dispatch]);

  const handleSearch = () => {
    if (!input.trim()) {
      setMessage("Digite algo para buscar.");
      return;
    }
    const filteredUsers = state.users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(input.toLowerCase());
    });
    dispatch({ type: "FILTER_USERS", payload: filteredUsers });
    setMessage(
      filteredUsers.length
        ? "Usuário(s) encontrado(s)."
        : "Nenhum usuário encontrado."
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome para buscar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar usuários</button>
      {message && <Message>{message}</Message>}
    </div>
  );
};

export default UserSearch;
