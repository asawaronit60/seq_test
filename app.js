const express = require('express')
const app = express()
const {sequelize} = require('./connection')
const User = require('./models/User')

const alter = false

sequelize.authenticate().then(()=>{
  console.log('connected to db successfully')
})
sequelize.sync({alter}).catch(err=>{
  console.log(err)
})

app.use(express.json())

app.get('/',(req,res)=>{
  res.send(['hello world'])
})

app.get('/user',async(req,res)=>{
  res.send(await User.findAll())
})
app.post('/user',async(req,res)=>{
  await User.create(req.body).then((resp)=>res.send(resp))
    .catch(er => res.send(er))
})
app.listen(8000,()=>{
  console.log('server is running at port 8000')
})