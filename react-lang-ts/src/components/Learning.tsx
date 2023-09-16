import { ArrowBack } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("language") as LangType;
  const navigate = useNavigate();

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        padding: "1rem",
      }}
    >
      <Button onClick={() => navigate("/")}>
        <ArrowBack />
      </Button>
    </Container>
  );
};

export default Learning;
