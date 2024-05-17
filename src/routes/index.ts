import Router from "express";
import { client } from "../client";

export const router = Router();

router.get("/", function (req, res) {
  // Exemplo de como a api funciona
  try {
    
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});
