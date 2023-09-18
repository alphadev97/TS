import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "js",
  },
  {
    name: "Turkish",
    code: "tr",
  },
  {
    name: "Arabic",
    code: "ar",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin journey of your learning!
      </Typography>
      <Stack direction={"row"} spacing={"2rem"}>
        {languages.map((i) => (
          <Button
            onClick={() => languageSelectHandler(i.code)}
            key={i.code}
            variant="contained"
          >
            {i.name}
          </Button>
        ))}
      </Stack>
      <Typography textAlign={"center"}></Typography>
    </Container>
  );
};

export default Home;
