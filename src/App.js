import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("orange");
  const [isFriendly, setFriendly] = useState(false);
  const [gender, setGender] = useState("male");
  const [imageFile, setImageFile] = useState("");
  // const [dataArray, setDataArray] = useState([
  //   {
  //     id: 1,
  //     name,
  //     fruit,
  //     isFriendly,
  //     gender,
  //     imageFile
  //   }
  // ]);

  function changeValues(event) {
    let { name, type } = event.target;
    let value = type === "checkbox" ? event.target.checked : event.target.value;
    if (name === "name") setName(value);
    if (name === "fruit") setFruit(value);
    if (name === "isFriendly") setFriendly(value);
    if (name === "gender") setGender(value);
    if (name === "file") setImageFile(event.target.files[0]);
  }

  const data = {
    id: Math.random(),
    name,
    fruit,
    isFriendly,
    gender,
    imageFile
  };
  console.log(data);
  const handleClick = () => {
    console.log("clicked");
    // setDataArray((prev) => [...prev]);
  };
  // console.log(dataArray);
  return (
    <div className="App">
      <div>
        <p>Name : {name} </p>
        <p>Fav fruit: {fruit}</p>
        <p> Are you friendly? {isFriendly ? "yes" : "no"} </p>
        <p> You are : {gender}</p>
        <form>
          <input
            type="text"
            onChange={changeValues}
            name="name"
            autoComplete="false"
          />
          <br />
          <select name="fruit" onChange={changeValues}>
            <option value="orange">Orange</option>
            <option value="mango">Mango</option>
          </select>
          <br />
          <label>
            <input type="checkbox" onChange={changeValues} name="isFriendly" />
            Is friendly
          </label>
          <br />
          <p>Gender:</p>
          <label>
            <input
              type="radio"
              onChange={changeValues}
              name="gender"
              value="male"
              checked={gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              onChange={changeValues}
              name="gender"
              value="female"
              checked={gender === "female"}
            />
            Female
          </label>
          <label>
            <input type="file" name="file" onChange={changeValues} />
          </label>
          <br />
          <br />
          <button onClick={handleClick}>+Add new</button>
        </form>
      </div>
    </div>
  );
}
