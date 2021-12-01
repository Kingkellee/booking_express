"use strict";
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER
    },
    {}
  );
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Doctor);
    Appointment.belongsTo(models.Patient);
  };
  return Appointment;
};