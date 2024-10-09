import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";

var sillyName = generateName();
var superName = randomSuperhero();

const text = `My super-her name is , ${superName}`;

console.log(text);
