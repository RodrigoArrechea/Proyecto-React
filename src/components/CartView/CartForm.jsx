import { useState } from "react";
import "./cartForm.css";
import MyButton from "../MyButton/MyButton";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(evt, data);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label className="label" htmlFor="name">
          Nombre
        </label>
        <input className="input"
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input"
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label className="label" htmlFor="phone">
          Teléfono
        </label>
        <input className="input"
          required
          value={data.phone}
          name="phone"
          type="phone"
          onChange={onInputChange}
        />
      </div>

      <MyButton disabled={data.name === "" || data.phone === "" || data.email === ""} type="submit">
        Finalizar Compra
      </MyButton>
    </form>
  );
}