import { OtherPokemonsController } from "./Controllers/OtherPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  otherPokemonsController = new OtherPokemonsController()
}

window["app"] = new App();
