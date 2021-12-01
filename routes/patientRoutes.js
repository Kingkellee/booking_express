const Doctor = require("../models").Doctor;
const Patient = require("../models").Patient;

module.exports = function(router) {
  router.get("/api/patients", (req, res) => {
    Patient.findAll({
      include: [Doctor]
    })
      .then(patients => {
        res.json(patients);
      })
      .catch(err => res.json(err));
  });

  router.get("/api/patients/:id", (req, res) => {
    Patient.findAll({
      where: { id: req.params.id }
    })
      .then(patient => {
        res.json(patient[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/api/patients", (req, res) => {
    Patient.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/api/patients/:id", (req, res) => {
    Patient.update({ first_name: req.body.first_name, last_name:req.body.last_name, email:req.body.email }, { where: { id: req.params.id } })
      .then(updatedPatient => {
        res.json(updatedPatient);
      })
      .catch(err => res.json(err));
  });

  router.delete("/api/patients/:id", (req, res) => {
    Patient.destroy({
      where: { id: req.params.id }
    })
      .then(patient => {
        res.json(patient);
      })
      .catch(err => res.json(err));
  });
};