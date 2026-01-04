// I will create a nested array of two sub-arrays and using a nested loop i will traverse through the array
let Sdata = [["Pranabesh","Manabesh","Rajashree"],["Basu","Roy","Sen"]]
for(let i = 0; i < Sdata.length; i++){
    console.log(i,Sdata[i]);
    for(let j = 0; j < Sdata[i].length; j++){
        console.log(`j = ${j} ${Sdata[i][j]}`);
    }
}