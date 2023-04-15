import express from "express";
const app = express();
const students=[
    {
        id:1,
        name:'eman',
        city:'shibin'
    },
    {
        id:2,
        name:'mohmed',
        city:'tanta'
    },
    {
        id:3,
        name:'meligy',
        city:'egy'
    },
    {
        id:4,
        name:'yhia',
        city:'shibin'
    },
]
const studentfun = (req, res) => {
    let output="<ul>"

    for (let i=0; i<students.length ; i++){
        const student = students[i]
        output += "<li>" + student.name +"</li>"
    }
    output +="</ul>"
    res.send(output)

}
app.get("/students", studentfun )
app.listen(3000);