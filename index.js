import  express  from "express";
import { scrape } from "./scrape.js";




const app = express();
app.get('/scrape' , (req , res)=>{
    scrape(res)
    //res.send('ok')
})

const PORT = 3000
app.listen(PORT)