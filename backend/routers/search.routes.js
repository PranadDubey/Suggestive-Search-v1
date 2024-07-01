const router = require("express").Router()
const db = require("../db.js")

router.get("/", (req, res) => {
  const query = req.query.q
  const sql = `
        SELECT id, title,'products' AS table_name  FROM products WHERE title LIKE ? 
        UNION 
        SELECT id, title,'services' AS table_name FROM services WHERE title LIKE ?
    `
  db.query(sql, [`%${query}%`, `%${query}%`], (err, results) => {
    if (err) {
      return res.status(500)
    }
    res.json(results)
  })
})

module.exports = router
