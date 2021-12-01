const Doctor = require("../models").Doctor;
const Patient = require("../models").Patient;

module.exports = function(router) {
  router.get("/api/doctors", (req, res) => {
    Doctor.findAll({
      include: [Patient]
    })
      .then(doctors => {
        res.json(doctors);
      })
      .catch(err => res.json(err));
  });

  router.get("/api/doctors/:id", (req, res) => {
    Doctor.findAll({
      where: { id: req.params.id }
    })
      .then(doctor => {
        res.json(doctor[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/api/doctors", (req, res) => {
    Doctor.create({
      name: req.body.name,
      email: req.body.email
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/api/doctors/:id", (req, res) => {
    Doctor.update({ name: req.body.name, email: req.body.email }, { where: { id: req.params.id } })
      .then(updatedDoctor => {
        res.json(updatedDoctor);
      })
      .catch(err => res.json(err));
  });

  router.delete("/api/doctors/:id", (req, res) => {
    Doctor.destroy({
      where: { id: req.params.id }
    })
      .then(doctor => {
        res.json(doctor);
      })
      .catch(err => res.json(err));
  });
};