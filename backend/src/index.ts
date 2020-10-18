import express from 'express'
import {Router} from 'express'

const app = express()
const user = Router()

user.get('', (req, res) => {
   res.status(200).json({msg: "hello world!!"})
})

app.use(express.json())
app.use('/user', user)

const PORT = 3000
app.listen(PORT, () => {
   console.log(`server listen on port ${PORT}`);
})
