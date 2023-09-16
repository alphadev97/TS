import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("language");

  return <div>Learning</div>;
};

export default Learning;
