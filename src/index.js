const express = require("express");
const morgan = require("morgan");

const app = express();

/* SETUP MIDDLEWARE */

app.use(morgan("dev"));

/* SETUP ROUTES */

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = 3030;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
