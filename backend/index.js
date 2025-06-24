const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let employees = [];

// ✅ Get all employees
app.get("/api/employees", async(req, res) => {
  try{
    const result = await pool.query("select * from manoj_emp_test");
    res.json(result.rows);
  }
  catch (err){
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// ✅ Add an employee 
app.post("/api/employees", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO manoj_emp_test (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json({ message: "Employee added", employee: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add employee" });
  }
});


// ✅ Update employee
app.put("/api/employees/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  try {
    await pool.query(
      "UPDATE manoj_emp_test SET name = $1, email = $2 WHERE id = $3",
      [name, email, id]
    );
    res.json({ message: "Employee updated", employee: { id, name, email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update employee" });
  }
});


// ✅ Delete employee
app.delete("/api/employees/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await pool.query("DELETE FROM manoj_emp_test WHERE id = $1", [id]);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete employee" });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Backend API running at http://localhost:${PORT}`);
});
