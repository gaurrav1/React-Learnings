import { useState } from "react";

export default function useToggle(intialValue) {
  const [value, setValue] = useState(intialValue);
  const toggle = () => {
    setValue(currentValue => !currentValue);
  };
  return [value, toggle];
}