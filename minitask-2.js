import { createInterface } from "node:readline/promises";

const tanggal = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await rl.question("Silahkan masukkan tanggal? DD-MM-YYYY ");
  if (
    answer.length !== 10 ||
    !answer.includes("-") ||
    answer[2] !== "-" ||
    answer[5] !== "-"
  ) {
    console.log("format tanggal salah");
  }

  let k = "";
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "-") {
      k = k + "/";
    } else {
      k = k + answer[i];
    }
  }
  console.log("tanggal masuk", k);

  rl.close();
};
tanggal();
