import express from 'express';
import contactRoutes from './routes/contactRoutes.js'
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{

     res.sendStatus(200)

})

app.use('/contact',contactRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});