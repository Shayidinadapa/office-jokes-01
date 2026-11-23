import { mkdirSync, writeFileSync } from "node:fs";

// One original office joke, a single line: the setup is a relatable
// reply-all accident, and the punchline lands on HR committing the
// very sin they are scolding — the form of the joke mirrors its content.
const JOKE =
  "I accidentally hit reply-all to the whole company, so HR replied-all to the whole company to tell me never to hit reply-all again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
