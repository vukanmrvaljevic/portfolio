const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const logger = require("morgan")
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger("dev"))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get("/", (req, res) => {
  res.send("This is root!")
})
