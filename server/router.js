const express = require("express");
const shortid = require("shortid");
const router = express.Router();
const Mensajes = require("./models/Mensajes.js");

module.exports = () => {
  router.get("/get-mensajes/:email", async (req, res) => {
    const mensajes = await Mensajes.find({ receptor: req.params.email });
    res.send(mensajes);
  });

  router.get("/get-mensajes-enviados/:email", async (req, res) => {
    const mensajes = await Mensajes.find({ emisor: req.params.email });
    res.send(mensajes);
  });

  router.post("/post-mensajes", async (req, res) => {
    const { contenido, receptor, emisor } = req.body;

    try {
      const mensajes = await Mensajes.create({
        _id: shortid.generate(),
        contenido: contenido,
        receptor: receptor,
        emisor: emisor,
      });
      mensajes.save();
      res.send("Mensaje Enviado");
    } catch (e) {
      res.send(e.message);
    }
  });

  return router;
};
