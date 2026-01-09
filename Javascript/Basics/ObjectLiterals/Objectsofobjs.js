const StudentInfo = {
    s1 : {
        name : "Pranabesh Basu",
        year : "3rd",
        semester : "6th",
        sec : 'c',
        roll : 19
    },
    s2 : {
        name : "Prtam Karak",
        year : "3rd",
        semester : "6th",
        sec : 'c',
        roll : 22
    },
    s3 : {
        name : "Rajbir Dey",
        year : "3rd",
        semester : "6th",
        sec : 'c',
        roll : 30 
    }
};
console.log(StudentInfo);
console.log(StudentInfo.s1.name); // accessing values via chaining
StudentInfo.s1.city = "Kolkata";
console.log(StudentInfo.s1);