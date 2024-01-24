const express= require('express')
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const PortfolioMessage = require('./model/modelDB')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/portfolioData');
  console.log("MONGO CONNECTTION ESTABLISHED")
}

const app=express()

app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


app.post("/", async (req, res) => {
    try {
        const Name= req.body.Name;
    const Email=req.body.Email;
    const Number=req.body.Number;
    const Message=req.body.Message

                const data = new PortfolioMessage({
                name: Name,
                email: Email,
                number: Number,
                message: Message
            });

            await data.save(); 
res.sendFile(__dirname+"/response.html")
      
    } catch (error) {
        console.error(error);
        res.sendFile(__dirname+"/failure.html")
    }
});

app.listen(3000,function(){
    console.log("The Server is Working on Port")
})
