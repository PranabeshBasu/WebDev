const studnetInfo = {
    name: "Pranabesh Basu",
    age: 21,
    maths: 90,
    phys: 95,
    cs: 90,
    chem: 95,
    getAvg(){
        let avg = (this.chem + this.maths + this.cs + this.phys)/ 4;
        console.log(`${this.name}'s average marks is ${avg}`);
    }
}
studnetInfo.getAvg();
