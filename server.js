const express = require("express");
const bodyparser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome, Do you want to make an Appointment Today?" });
0});

require("./routes/appointmentRoutes")(app);
require("./routes/doctorRoutes")(app);
require("./routes/patientRoutes")(app);

app.listen(port, () => console.log(`Server started on ${port}`));