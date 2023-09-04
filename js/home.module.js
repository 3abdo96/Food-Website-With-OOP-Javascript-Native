import { Details } from "./details.module.js";
import { UI } from "./ui.module.js";
import { validation } from "./validation.module.js";

export class Home {
  constructor() {
    this.loading = document.querySelector(".loading-screen");
    this.innerLoading = document.querySelector(".inner-loading-screen");
    this.getMeals();
    this.ui = new UI();

    document
      .getElementById("search")
      .addEventListener("click", this.search.bind(this));

    document.getElementById("searchByName").addEventListener("keyup", () => {
      this.searchByName(document.getElementById("searchByName").value);
    });
    document.getElementById("filterByletter").addEventListener("keyup", () => {
      this.filterByLetter(document.getElementById("filterByletter").value);
    });

    document
      .getElementById("categoryBtn")
      .addEventListener("click", this.getCategories.bind(this));
    document
      .getElementById("areaBtn")
      .addEventListener("click", this.getArea.bind(this));
    document
      .getElementById("ingredientsBtn")
      .addEventListener("click", this.getIngredients.bind(this));
    document
      .getElementById("contactBtn")
      .addEventListener("click", this.show.bind(this));
  }

  async getMeals() {
    this.loading.classList.remove("d-none");
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let api = await fetch(url);
    let response = await api.json();

    this.ui.displayMeals(response.meals);

    this.showDetails();
    this.loading.classList.add("d-none");
  }

  search() {
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");
    $("#searchContainer").removeClass("d-none");
    $("#meals").addClass("d-none");

    $("#meals").addClass("d-none");
    $("#categories").addClass("d-none");
    $("#area").addClass("d-none");
    $("#details").addClass("d-none");
    $("#ingredients").addClass("d-none");
    $("#contact-us").addClass("d-none");
  }

  async searchByName(name) {
    this.innerLoading.classList.remove("d-none");
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    this.ui.displayMeals(response.meals);
    $("#meals").removeClass("d-none");
    this.showDetails();
  }
  async filterByLetter(letter) {
    this.innerLoading.classList.remove("d-none");
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    this.ui.displayMeals(response.meals);
    $("#meals").removeClass("d-none");
    this.showDetails();
  }

  async getCategories() {
    this.innerLoading.classList.remove("d-none");
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");

    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    this.ui.displayCategories(response.categories);

    $("#meals").addClass("d-none");
    $("#categories").removeClass("d-none");
    $("#area").addClass("d-none");
    $("#details").addClass("d-none");
    $("#ingredients").addClass("d-none");
    $("#contact-us").addClass("d-none");
    $("#searchContainer").addClass("d-none");

    this.showCategoryMeals();
  }

  async getArea() {
    this.innerLoading.classList.remove("d-none");
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");

    let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    this.ui.displayArea(response.meals);

    $("#meals").addClass("d-none");
    $("#area").removeClass("d-none");
    $("#categories").addClass("d-none");
    $("#details").addClass("d-none");
    $("#ingredients").addClass("d-none");
    $("#contact-us").addClass("d-none");
    $("#searchContainer").addClass("d-none");

    this.showAreaMeals();
  }
  async getIngredients() {
    this.innerLoading.classList.remove("d-none");
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");

    let url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    this.ui.displayIngredients(response.meals.slice(0, 20));

    $("#meals").addClass("d-none");
    $("#ingredients").removeClass("d-none");
    $("#categories").addClass("d-none");
    $("#details").addClass("d-none");
    $("#area").addClass("d-none");
    $("#contact-us").addClass("d-none");
    $("#searchContainer").addClass("d-none");

    this.showIngredientsMeals();
  }
  show() {
    $(".side-nav-menu").animate({ left: "-267px" }, 600);
    $("#open-icon").removeClass("fa-x");
    $("#open-icon").addClass("fa-align-justify");

    // this.ui.showContacts();
    $("#meals").addClass("d-none");
    $("#contact-us").removeClass("d-none");
    $("#categories").addClass("d-none");
    $("#details").addClass("d-none");
    $("#area").addClass("d-none");
    $("#ingredients").addClass("d-none");
    $("#searchContainer").addClass("d-none");

    new validation();
  }

  showDetails() {
    document.querySelectorAll(".meal").forEach((meal) => {
      meal.addEventListener("click", () => {
        $("#meals").addClass("d-none");
        $("#details").removeClass("d-none");
        $("#categories").addClass("d-none");
        $("#contact-us").addClass("d-none");
        $("#area").addClass("d-none");
        $("#ingredients").addClass("d-none");
        $("#searchContainer").addClass("d-none");
        new Details(meal.dataset.id);
      });
    });
  }

  showCategoryMeals() {
    document.querySelectorAll(".meal").forEach((cat) => {
      cat.addEventListener("click", () => {
        this.getCategoryMeals(cat.dataset.category);
      });
    });
  }
  async getCategoryMeals(category) {
    this.innerLoading.classList.remove("d-none");
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(response.meals[i]);
    }
    $("#meals").removeClass("d-none");
    $("#categories").addClass("d-none");
    this.ui.displayMeals(arr);
    this.showDetails();
  }
  showAreaMeals() {
    document.querySelectorAll("[data-area]").forEach((ar) => {
      ar.addEventListener("click", () => {
        this.getAreaMeals(ar.dataset.area);
      });
    });
  }
  async getAreaMeals(area) {
    this.innerLoading.classList.remove("d-none");
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(response.meals[i]);
    }
    $("#meals").removeClass("d-none");
    $("#area").addClass("d-none");
    this.ui.displayMeals(arr);
    this.showDetails();
  }
  showIngredientsMeals() {
    document.querySelectorAll("[data-ingredient]").forEach((ing) => {
      ing.addEventListener("click", () => {
        this.getIngredientsMeals(ing.dataset.ingredient);
      });
    });
  }
  async getIngredientsMeals(ingredient) {
    this.innerLoading.classList.remove("d-none");
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    let api = await fetch(url);
    let response = await api.json();
    this.innerLoading.classList.add("d-none");
    let arr = [];
    for (let i = 0; i < 20; i++) {
      arr.push(response.meals[i] ? response.meals[i] : "");
    }
    $("#meals").removeClass("d-none");
    $("#ingredients").addClass("d-none");
    console.log(arr);
    this.ui.displayMeals(arr);
    this.showDetails();
  }
}
