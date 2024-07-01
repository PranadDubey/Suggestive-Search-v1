const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const searchRoutes = require("./routers/search.routes")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/search", searchRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
