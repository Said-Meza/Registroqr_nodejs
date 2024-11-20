const error404 = (req, res) => {
  res.status(404).render("error", {
    title: "NotFound",
    code: "404 ",
    message: "la ruta que buscas no existe",
  });
};

export default {
  error404,
};
