import {Router} from "express";
import db from "../database/db.js";
const router = Router()


//for readings
router.get('/',(req,res)=>{

const getContacts = db.prepare('SELECT * FROM contacts')
const getContactres = getContacts.all()
res.json(getContactres)

})

//for inserting
router.post('/',(req,res)=>{

const {username,email,phone,message} = req.body
const insertContacts = db.prepare('INSERT INTO contacts (name, email, phone, message) VALUES (?,?,?,?)')
const insertContactres=insertContacts.run(username,email,phone,message)
res.json( {id : insertContactres.lastInsertRowid,  name : username, email : email , phone : phone , message : message})

})

export default router