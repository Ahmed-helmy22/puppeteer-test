import  express  from "express";
import { scrape } from "./scrape.js";
import dotenv from 'dotenv'


dotenv.config()

const app = express();
app.get('/scrape' , (req , res)=>{
    scrape(res)
    //res.send('ok')
})

const PORT = 3000
app.listen(PORT)