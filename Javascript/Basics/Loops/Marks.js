let marks = [["Pranabesh", 95],["shraddha", 98],["Pritam",100]];
for(let i = 0; i < marks.length; i++){
    console.log(`Info of student ${i+1}`);
    for(let j = 0; j < marks[i].length; j++){
        console.log(marks[i][j]);
    }
}