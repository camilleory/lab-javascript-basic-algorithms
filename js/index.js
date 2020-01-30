// Iteration 1: Names and Input


console.log("I'm ready!");
let hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Camille";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops


let result = "";
for (let i = 0; i < hacker1.length; i++){
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let result2 = "";
for (let i = hacker1.length-1; i >= 0; i--){
result2 += hacker1[i];
}
console.log(result2);

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first.")
    break;
  } else if(hacker1[i] > hacker2[i]){
    console.log("Yo, the navigator goes first definitely.")
    break;
  } else if (hacker1[1]===hacker2[i]){
    console.log("You have the same name!");
  }
}
let string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque placerat finibus. Sed dapibus porta lectus vel cursus. Nulla laoreet semper suscipit. Aliquam eget viverra libero, et egestas arcu. Mauris ut rhoncus neque, commodo congue lacus. Aenean posuere ornare congue. In vel fermentum arcu. Duis rutrum fringilla convallis. Maecenas sollicitudin turpis dolor, ut fringilla risus facilisis at. Morbi eros enim, sodales eget ex a, cursus vulputate turpis. Mauris elementum augue placerat felis iaculis blandit. Curabitur eget suscipit est. Nunc ut pulvinar tellus. Mauris finibus, mi id consectetur ultricies, neque turpis maximus felis, in tincidunt massa lorem vel ipsum. Ut vel fermentum neque.

Nam vitae porta enim. Nam quis efficitur libero, at tincidunt enim. Duis placerat turpis velit, nec rhoncus leo auctor quis. In purus urna, porta eget mauris non, ullamcorper pretium erat. Cras sed hendrerit turpis. Phasellus non mauris eget risus mollis sollicitudin. Vestibulum metus nisl, luctus vel odio sit amet, convallis congue tellus. Suspendisse ullamcorper lectus velit, in aliquam dolor finibus sed. Vivamus blandit felis id pulvinar rhoncus. Nulla bibendum felis ante, id lobortis mauris imperdiet nec. Vivamus id luctus nibh, quis efficitur est.

Etiam maximus libero tristique, sagittis justo sed, congue tortor. Morbi varius urna nunc. Sed luctus tellus lacus, et luctus diam scelerisque a. Praesent sit amet aliquet urna. Morbi porttitor arcu vitae massa fringilla ullamcorper. Quisque viverra mauris elit, sit amet accumsan lacus aliquam auctor. Morbi volutpat laoreet odio quis vehicula. Phasellus in varius ipsum. Morbi suscipit augue eu sapien convallis fermentum. Nam sit amet scelerisque mauris. Etiam nec pharetra ante. Aliquam non posuere risus. Nullam ipsum nisl, convallis eu leo in, facilisis blandit orci. Mauris quam mauris, faucibus nec ex eget, suscipit suscipit mauris. Proin orci enim, sollicitudin nec sodales vitae, accumsan quis odio. Maecenas elit enim, aliquet nec ipsum in, pharetra dictum elit.`
 
let wordCount = 0;

for (let i = 0; i<string.length; i++){
  if (i === " "){
    wordCount++;
  }
}
console.log(wordCount);