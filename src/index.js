import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);
// distructuring
const [honda, tesla] = cars;
// console.log(honda);
// console.log(tesla);

// how can we hold the (topspeed)
// const { speedStats: {topSpeed}} = honda
// changing the name here
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

//  for tesla now
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour, theSecondColor]
} = honda;
const { coloursByPopularity: teslaTopColour } = tesla;

// console.log(animals);

// const [cat, dog] = animals;
// //  or like that
// // var cat = animals[0];
// // console.log(cat);

// // console.log(useAnimals(cat));
// console.log(useAnimals(cat));
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// // const { name, sound } = cat;
// // console.log(sound);
// // or we could have said like that
// // animals[0].sound;

// // const { name: catName, sound: catSound } = cat;
// // console.log(catName);

// // const { name = "fluffy", sound = "purr" } = cat;
// // console.log(name);

// // const {
// //   name,
// //   sound,
// //   feedingReuirments: { food, water }
// // } = cat;

// // console.log(feedingReuirments);
// // console.log(food);

// const {
//   feedingReuirments: { food, water }
// } = cat;
// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>
        {hondaTopColour} {theSecondColor}
      </td>
    </tr>
  </table>,
  document.getElementById("root")
);
