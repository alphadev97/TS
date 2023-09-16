import { Button, Container, Stack, Typography } from "@mui/material";

const languages = [
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
      <Stack direction={"row"} spacing={"2rem"}>
        {languages.map((i) => (
          <Button key={i.code} variant="contained">
            {i.name}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
