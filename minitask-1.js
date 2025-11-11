// Using default import
import { createInterface } from "node:readline";
import moment from "moment";

// Using named imports
// import { createInterface } from 'readline';

// Create interface

const tanggal = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Silahkan masukkan tanggal? DD-MM-YYYY ", (answer) => {
    const kode = moment(answer, "DD-MM-YYYY", true);

    if (!kode.isValid()) {
      console.log("Tanggal tidak valid");
      return tanggal();
    } else {
      console.log(`Tanggal yang masuk ${kode.format("DD/MM/YYYY")}`);
    }

    rl.close();
  });
};
tanggal();
