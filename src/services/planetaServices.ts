import { client } from "../client";
import { Planeta } from "../models/planetas";

class PlanetaServices {
  public static async getAllPlanets(): Promise<any> {
    const listaPlanetas: Planeta[] = [];
    client
      .get("/planets/")
      .then(async (response) => {
        while (response.data.next) {
          listaPlanetas.push(...response.data.results);
          response = await client.get(response.data.next);
        }

        if (listaPlanetas.length > 0) {
          return listaPlanetas;
        } else {
          return "Error fetching data";
        }
      })
      .catch((error) => {
        return `Error fetching data: ${error}`;
      });
  }
}

export default PlanetaServices;
