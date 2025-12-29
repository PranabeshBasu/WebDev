let colors = ["yellow", "red", "black", "blue", "green", "white"];
console.log(colors.splice(2)); //passed only start index so it acts like slice
console.log(colors);
console.log(colors.splice(0,1)); 
console.log(colors);
console.log(colors.splice(0,0,"blue", "green"));
console.log(colors);

console.log(colors.splice(2,0,"pink"));
console.log(colors);
console.log(colors.splice(3,1,"grey"));
console.log(colors);