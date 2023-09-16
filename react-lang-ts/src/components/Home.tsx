import { Container, Typography } from "@mui/material";

const laguages = [
  {
    name: "Japanese",
    code: "js",
  },
  {
    name: "Urdu",
    code: "ur",
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
  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin journey of your learning!
      </Typography>
    </Container>
  );
};

export default Home;
