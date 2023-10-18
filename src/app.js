/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
//write your code here

let pronoun = ["the", "my", "your", "our"];
let adjective = ["great", "wild", "green", "fast"];
let noun = ["plan", "fox", "dot", "cheer"];
let extension = [".com", ".es", ".net", ".io"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adjective.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < extension.length; e++) {
        console.log(pronoun[p] + adjective[a] + noun[n] + extension[e]);
      }
    }
  }
}
