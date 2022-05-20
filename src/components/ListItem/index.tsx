import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onClick: (id: number) => void;
};
export const ListItem = ({ item, onChange, onClick }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  const test = (id: number) => {
    console.log({ id });
  };
  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label>{item.name}</label>
      <button type="button" onClick={() => onClick(item.id)}>
        <i className="fi fi-rr-cross"></i>
      </button>
    </C.Container>
  );
};
