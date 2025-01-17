/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

const typeInput = {
  type: "input",
  name: "url",
  message: "What's the URL you want to convert in a QRCode?!",
};

var text = inquirer
  .prompt([typeInput])
  .then((answer) => {
    console.log(answer);
    const url = answer.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`${url}.png`));
    fs.writeFile(`${url}.txt`, url, (err) => {
      if (err) throw err;
      console.log("Created the file succsseecefully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
