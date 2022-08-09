import Image from "next/image";
import { useState } from "react";

const initialSearchState = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  address: [],
  age: "",
  bank: [],
  birthDate: "",
  company: [],
  domain: "",
  phone: "",
  email: "",
  eyeColor: "",
  gender: "",
  hair: "",
  height: "",
  weight: "",
  image: "",
  ip: "",
  password: "",
  university: "",
};

const NameSearch = ({ userData }) => {
  const [characterData, setcharacterData] = useState(userData);
  const [filteredCharacterData, setfilteredCharacterData] = useState([]);
  const [searchQuery, setsearchQuery] = useState(initialSearchState);

  const applyFilters = (e) => {
    e.preventDefault();
    e.target.reset();

    const filteredQuery = characterData.filter(
      ({ firstName, lastName, age }) =>
        firstName === searchQuery.firstName ||
        lastName === searchQuery.lastName ||
        age.toString() === searchQuery.age.toString()
    );

    setfilteredCharacterData(filteredQuery);
    setcharacterData(userData);
    setsearchQuery(initialSearchState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsearchQuery((prev) => ({ ...prev, [name]: value }));
  };

  console.log(filteredCharacterData);

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
      </form>
      <aside>
        {filteredCharacterData.map((i, key) => {
          return (
            <ul key={key}>
              <li>{i.firstName}</li>
              <li>{i.lastName}</li>
              <Image src={`${i.image}`} height={200} width={200} />
            </ul>
          );
        })}
      </aside>
    </div>
  );
};

export default NameSearch;
