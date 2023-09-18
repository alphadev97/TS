import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const result = ["lol", "Sample", "Ans"];

const words = [
  {
    meaning: "Ashjf",
  },
  {
    meaning: "Adfsdfshjf",
  },
];

const Result = () => {
  const correctAns = 5;
  const percentage = (correctAns / words.length) * 100;
  return (
    <Container maxWidth={"sm"}>
      <Typography variant="h3" color={"primary"} m={"2rem 0"}>
        Result
      </Typography>
      <Typography m={"1rem"} variant="h6">
        You got {correctAns} right out of {words?.length}
      </Typography>

      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Your Answer
          </Typography>
          <List>
            {result.map((i, idx) => (
              <ListItem key={idx}>
                {idx + 1} - {i}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack>
          <Typography m={"1rem 0"} variant="h5">
            Correct Answer
          </Typography>
          <List>
            {words?.map((i, idx) => (
              <ListItem key={idx}>
                {idx + 1} - {i.meaning}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>

      <Typography
        m={"1rem "}
        variant="h5"
        color={percentage > 50 ? "green" : "red"}
      >
        {percentage > 50 ? "Pass" : "Fail"}
      </Typography>

      <Button sx={{ margin: "1rem" }} variant="contained">
        Reset
      </Button>
    </Container>
  );
};

export default Result;
