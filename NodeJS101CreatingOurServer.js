const express=require('express');
const app=express();


// app.use("/",(req, res)=>{
//     res.send("Hello SIR/MAM ");
// })

app.use("/home",(req, res)=>{
    res.send("Hello Mukesh Rawat");
})

app.use("/contact",(req, res)=>{
    res.send("Hello from contact ");
})


app.listen(3000, ()=>{
console.log("Server has been running...");
});
/* ~ 6 = % `  + ^ | _*/