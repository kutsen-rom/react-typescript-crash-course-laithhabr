import { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.notes,
      },
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      notes: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name="name"
        value={input.name}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={handleChange}
        name="age"
        value={input.age}
      />
      <input
        type="text"
        placeholder="Image url"
        onChange={handleChange}
        name="img"
        value={input.img}
      />
      <textarea
        placeholder="Notes"
        onChange={handleChange}
        name="note"
        value={input.notes}
      />
      <button onClick={handleClick}>Add to list</button>
    </div>
  );
};
