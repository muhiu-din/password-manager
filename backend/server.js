import express from 'express'
import { Pass } from './models/pass.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//Fetching whole Data
app.get('/api', async (req, res) => {
    try{
        let data = await Pass.find()
    res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: "Error Fetching Data"})
    }
    })
//Posting to DB
app.post('/api', async (req, res) => {
    try{
    const data = new Pass(req.body)
    await data.save()
    res.status(200).json({message: "Password saved Successfully!!"})
    }catch(error){
        res.status(500).json({message: "Error saving password"})
    }
    })
//Editing data
    app.put(`/api/:id`, async (req, res) => {
        try{
        await Pass.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({message: "Password updated Successfully!!"})
        }catch(error){
            res.status(500).json({message: "Error updating password"})
        }
        })
        
//Deleting data
        app.delete(`/api/:id`, async (req, res) => {
            try{
            await Pass.findByIdAndDelete(req.params.id)
            res.status(200).json({message: "Password deleted Successfully!!"})
            }catch(error){
                res.status(500).json({message: "Error deleting password"})
            }
            })


        app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
