type PropsType = {
  heading: string;
};

const Box = ({ heading }: PropsType) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

export default Box;
