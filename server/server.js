const path = require("path")
const express = require("express")
const server = express()

// const assessmentsRoutes = require("./routes/assessments")
// const cohortsRoutes = require("./routes/cohorts")
const mediaRoutes = require("./routes/media")
// const authRoutes = require("./routes/auth")

server.use(express.json())
server.use(express.static(path.join(__dirname, "./public")))

// server.use("/api/v1/assessments", assessmentsRoutes)
// server.use("/api/v1/cohorts", cohortsRoutes)
server.use("/api/v1/media", mediaRoutes)
// server.use("/api/v1/auth", authRoutes)

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

module.exports = server
