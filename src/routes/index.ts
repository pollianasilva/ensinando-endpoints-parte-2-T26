import Router from "express";

export const router = Router();

router.get("/", function (req, res) {
  // Exemplo de como a api funciona
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});
