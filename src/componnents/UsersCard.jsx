import React from "react";

const UsersCard = ({ list }) => {
  return (
    <div className="card">
      <ul className="list">
        <li>"id":{list.id},</li>
        <li>"Name":"{list.name}",</li>
        <li>"UserName":"{list.username}",</li>
        <li>"Email":"{list.email}",</li>
        <li>"Adress":</li>
        <li>"street":"{list.address.street}",</li>
        <li> "suite":"{list.address.suite}",</li>
        <li>"city":"{list.address.city}",</li>
        <li> "Zipcode":"{list.address.zipcode}",</li>
        <li>"Phone":"{list.phone}",</li>
        <li>"website":"{list.website}",</li>
        <li>"company":</li>
        <li>" name":"{list.company.name}",</li>
        <li>" catchPhrase":"{list.company.catchPhrase}",</li>
        <li>" bs":"{list.company.bs}",</li>
      </ul>
    </div>
  );
};

export default UsersCard;
