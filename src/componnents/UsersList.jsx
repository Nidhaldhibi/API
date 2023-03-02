import React from "react";
import UsersCard from "../componnents/UsersCard";

const UsersList = ({ list, error, isLoading }) => {
  if (isLoading) {
    return <h1>...loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    list && (
      <div>
        {list.map((list) => (
          <UsersCard list={list} key={list.id} />
        ))}
      </div>
    )
  );
};

export default UsersList;
