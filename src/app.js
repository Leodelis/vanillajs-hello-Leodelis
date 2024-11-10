import "./style.css";

window.onload = function() {
  // array de las frases

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // declaración aleatoria de las variables

  let partwho = Math.floor(Math.random() * who.length);
  let partact = Math.floor(Math.random() * action.length);
  let partwhat = Math.floor(Math.random() * what.length);
  let partwhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[partwho] + action[partact] + what[partwhat] + when[partwhen];
};
