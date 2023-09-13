import { ReactNode } from "react";

type inputType = string | number;

const Box = <T extends inputType>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
      <button>Search</button>
    </form>
  );
};

export default Box;
