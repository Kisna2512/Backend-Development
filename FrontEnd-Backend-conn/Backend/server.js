import express from "express";

const app = express();
import cors from "cors";
app.use(cors());

const port = process.env.PORT || 4000;
app.use(express.static("build"));
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "The Past, the Present, and the Future walk into a bar...",
      content: "It was tense.",
    },
    {
      id: 2,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 3,
      title: "Parallel lines have so much in common...",
      content: "It's a shame they'll never meet.",
    },
    {
      id: 4,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 5,
      title: "I'm reading a book on anti-gravity...",
      content: "It's impossible to put down!",
    },
  ];
  res.send(joke);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
