const Appointment = require("../models").Appointment;
const Doctor = require("../models").Doctor;
const Patient = require("../models").Patient;

module.exports = function(router) {
  router.get("/api/appointments", (req, res) => {
    Appointment.findAll({
      include: [Doctor, Patient]
    }).then(appointments => {
      res.json(appointments);
    });
  });

  router.get("/api/appointments/:id", (req, res) => {
    Appointment.findAll({
      where: { id: req.params.id },
      include: [Doctor, Patient]
    }).then(appointment => {
      res.json(appointment[0]);
    });
  });

  router.post("/api/appointments", (req, res) => {
    Appointment.create({
      doctorId: req.body.doctorId,
      patientId: req.body.patientId,
      date: req.body.date
    })
      .then(appointments => {
        res.json(appointments);
      })
      .catch(err => res.json(err));
  });

  router.put("/api/appointments/:id", (req, res) => {
    Appointment.update(
      { doctorId: req.body.doctorId, patientId: req.body.patientId, date: req.body.date },
      { where: { id: req.params.id } }
    )
      .then(updatedAppointment => {
        res.json(updatedAppointment);
      })
      .catch(err => console.log(err));
  });

  router.delete("/api/appointments/:id", (req, res) => {
    Appointment.destroy({
      where: { id: req.params.id }
    }).then(appointment => {
      res.json(appointment);
    });
  });
};