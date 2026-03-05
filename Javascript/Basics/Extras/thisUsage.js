let student = {
    name : "Pranabesh Basu",
    roll : 1,
    getName : function () {
        console.log(this);
        return this.name;
    },
    getRoll : () => {
        console.log(this);
        return this.roll;
    }
}
console.log(student.getName());
console.log(student.getRoll());