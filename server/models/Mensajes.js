const mongoose = require("mongoose");

const mensajesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [
      true,
      "Todos los deseos guardados tienen que tener asignado un ID",
    ],
  },

  contenido: {
    type: String,
    required: [
      true,
      "El mensaje no puede estar vacio",
    ],
    maxLength: [
      90,
      "El mensaje puede tener hasta 90 caracteres",
    ],
  },

  contenido: {
    type: String,
    required: [
      true,
      "El mensaje no puede estar vacio",
    ],
    maxLength: [
      90,
      "El mensaje puede tener hasta 90 caracteres",
    ],
  },

  emisor: {
    type: String,
    required: [
      true,
      "El emisor no puede estar vacio",
    ],
    minLength: [
      5,
      "El email del emisor tener al menos 5 caracteres",
    ],
    maxLength: [
      90,
      "El email del emisor puede tener hasta 90 caracteres",
    ],
  },

  receptor: {
    type: String,
    required: [
      true,
      "El receptor no puede estar vacio",
    ],
    minLength: [
      5,
      "El email del receptor tener al menos 5 caracteres",
    ],
    maxLength: [
      90,
      "El email del receptor puede tener hasta 90 caracteres",
    ],
  },


  createdAd: {
    type: Date,
    immutable: [true, "La fecha de creación no se puede modificar."],
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Mensaje", mensajesSchema);