import CodeQr from "../helpers/Qr.js";
import { encriptarPassword } from "../helpers/hash.js";

import Error from "../middlewares/Errors.js";
import mRegistro from "../model/mRegistro.js";
import schema from "../middlewares/ValidadForm.js";

const cRegistro = {
  getIndex: (req, res) => {
    res.render("Index");
  },

  getForm: (req, res) => {
    res.render("Registro", { error: false, data: {} });
  },

  create: async (req, res) => {
    try {
      //valida los datos
      const { error, value } = schema.validate(req.body, { abortEarly: false });

      if (error) return Error.e400(req, res, error);
        
      //generacion token
      const hash = await encriptarPassword(value.name);
      //HACER QUE LA APP VERIFIQUE EL TOKEN

      // genera el QR
      const qr = await CodeQr(hash);

      if (!qr) return Error.e500(req, res, err);
        
      const data = { active: true,qr: qr,};

      value.hash = hash;
      
      //registra la inf a la db
      await mRegistro.create(value);

      //mando el Qr a la cliente
      res.render("Registro", { data, error: false });
    } catch (err) {
      Error.e500(req, res, err);
    }
  },
};

export default cRegistro;
