import { mkdirSync, writeFileSync } from "node:fs";

// One original office joke, a single line: the setup is a relatable
// reply-all accident, and the punchline lands on HR committing the
// very sin they are scolding — the form of the joke mirrors its content.
const JOKE =
  "I accidentally hit reply-all to the whole company, so HR replied-all to the whole company to tell me never to hit reply-all again.";

const MAX_LENGTH = 200;

// A judge-ready one-liner must be exactly one line and short enough to
// land in a single breath; refuse to write anything that breaks that.
if (JOKE.includes("\n") || JOKE.length >= MAX_LENGTH) {
  throw new Error(
    `joke must be a single line under ${MAX_LENGTH} characters (got ${JOKE.length})`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
