import jsonfile from "jsonfile";
import moment from "moment";
import { simpleGit } from "simple-git";
import random from "random";

const path = "./data.json";
const startDate = moment("2022-01-01");
const totalWeeks = Math.max(1, moment().diff(startDate, "weeks"));

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const x = random.int(0, totalWeeks);
  const y = random.int(0, 6);

  const date = startDate
    .clone()
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  console.log(date);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, () => makeCommits(--n));
  });
};

makeCommits(500);