const express = require("express");
const AgeCalculatorSelf = require("./util/AgeCalculator");

const app = express();
const ageCalculator = new AgeCalculatorSelf();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.post("/age",function(req,res){

    //console.log(req.body.age);
    const regexExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const birthDate = req.body.age;
    if(regexExp.test(birthDate)){
    var thedate = new Date(birthDate);
    let data = ageCalculator.getAge(thedate);
    if(data){
    res.send({
        status: 200,
        name : req.query.name,
        data: data

      });
    }else {
        res.send({
          status: 500,
          data: "Something went wrong",
        });
    }
  }else{
    res.send({
      status: 200,
      data: "Please Enter age in 'YYYY-DD-MM' format",
    });
  }
    

});

app.listen(7005, () => {
    console.log("ageCalculator is running...");
  });