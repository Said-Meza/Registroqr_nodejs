const Error = {
  e400: (req, res, err) => {
    res
      .status(400)
      .render("Registro", {
        data:{active:false},
        error:err || true,
        title: "Error 400 validacion",
        message: err.details.map(err=>err.message),
        code:err.status
      });
  },

  e404: (req, res) => {
    res
      .status(404)
      .render("error", {
        title: "Error 404 notFound",
        message: "la ruta que buscas no existe",
        code:err.status
      });
  },

  e500: (req, res, err) => {
    res
      .status(500)
      .render("error", {
        title: "Error interno del servidor",
        message: err.message,
        code:err.status
      });
  },
};

export default Error;
