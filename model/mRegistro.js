import pool from "../config/db.js";

const mRegistro = {
  create: async (form) => {
    try {

      console.log(form)
      await pool.execute("CALL InsertData(?,?,?,?,?,?,?)", [
        form.name,
        form.tel,
        form.correo,
        form.carrera,
        form.matricula,
        form.semestre,
        form.hash
      ]);


    } catch (err) {
      throw { status: 500, message: "error al crear  un registro" };
    }
  },
};

export default mRegistro;
