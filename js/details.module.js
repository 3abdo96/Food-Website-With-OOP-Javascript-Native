import { UI } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.getDetails(id);
  }

  async getDetails(id) {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    let api = await fetch(url);
    let response = await api.json();
    new UI().displayDetails(response);
  }
}
