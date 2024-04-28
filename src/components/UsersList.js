import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";

const UserCard = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UsersList = () => {
  const { state } = useContext(UserContext);
  const { users } = state;

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id}>
          <img
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>
            Gênero: {user.gender}, Idade: {user.age}, Email: {user.email}
          </p>
        </UserCard>
      ))}
    </div>
  );
};

export default UsersList;
