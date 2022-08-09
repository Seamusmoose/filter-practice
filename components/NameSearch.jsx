import { useState, useEffect } from "react";

const initialSearchState = {
  firstName: "",
  lastName: "",
  address: [],
  age: 0,
  bank: [],
  company: [],
  birthday: "",
  domain: "",
  email: "",
  eyeColour: "",
  gender: "",
  hairColour: "",
  university: "",
  phoneNumber: "",
  userName: "",
  weight: "",
};

const NameSearch = ({ userData }) => {
  const [characterData, setcharacterData] = useState(userData);
  const [searchQuery, setsearchQuery] = useState(initialSearchState);

  const applyFilters = (e) => {
    e.preventDefault();

    const filteredQuery = characterData.filter(
      (val) => val.firstName === searchQuery.firstName
    );
    setcharacterData(filteredQuery);
  };

  const handleResetFilters = () => {
    setcharacterData(userData);
    setsearchQuery(initialSearchState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsearchQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={applyFilters}>
        <input
          type="text"
          name="firstName"
          placeholder="Search by First Name"
          value={characterData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="Search by Last Name"
          value={characterData.lastName}
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          placeholder="Search by Address"
          value={characterData.address}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Search by Age"
          value={characterData.age}
        />
        <input
          type="text"
          name="bank"
          onChange={handleChange}
          placeholder="Search by Bank"
          value={characterData.bank}
        />
        <input
          type="text"
          name="company"
          onChange={handleChange}
          placeholder="Search by Company"
          value={characterData.company}
        />
        <input
          type="text"
          name="birthday"
          onChange={handleChange}
          placeholder="Search by Birthday"
          value={characterData.birthday}
        />
        <input
          type="text"
          name="domain"
          onChange={handleChange}
          placeholder="Search by Domain"
          value={characterData.domain}
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Search by Email"
          value={characterData.email}
        />
        <input
          type="text"
          name="eyeColour"
          placeholder="Search by Eye Colour"
          value={characterData.eyeColour}
        />
        <input
          type="text"
          name="gender"
          onChange={handleChange}
          placeholder="Search by Gender"
          value={characterData.gender}
        />
        <input
          type="text"
          name="hairColour"
          onChange={handleChange}
          placeholder="Search by Hair Colour"
          value={characterData.hairColour}
        />
        <input
          type="text"
          name="university"
          onChange={handleChange}
          placeholder="Search by University"
          value={characterData.university}
        />
        <input
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          placeholder="Search by Phone Number"
          value={characterData.phoneNumber}
        />
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          placeholder="Search by UserName"
          value={characterData.userName}
        />
        <input
          type="text"
          name="weight"
          onChange={handleChange}
          placeholder="Search by Weight"
          value={characterData.weight}
        />
        <button type="submit">Search</button>
        <button onClick={handleResetFilters} type="button">
          Reset
        </button>
      </form>
      <aside>
        {characterData.map((i, key) => {
          return (
            <ul key={key}>
              <li>{i.firstName}</li>
            </ul>
          );
        })}
      </aside>
    </div>
  );
};

export default NameSearch;
