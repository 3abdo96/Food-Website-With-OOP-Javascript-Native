export class UI {
  constructor() {}

  displayMeals(data) {
    let mealsConatiner = ``;
    for (let i = 0; i < data.length; i++) {
      mealsConatiner += ` <div class="col-md-3">
      <div
              class="meal position-relative overflow-hidden cursor-pointer rounded-2" data-id=${data[i].idMeal}
            >
              <img src="${data[i].strMealThumb}" alt="" class="w-100" />
              <div class="overlay">
                <h3>${data[i].strMeal}</h3>
              </div>
            </div>
                    </div>
`;
      document.getElementById("meals").innerHTML = mealsConatiner;
    }
  }

  displayCategories(data) {
    let catConatiner = ``;
    for (let i = 0; i < data.length; i++) {
      catConatiner += `  <div class="col-md-3">
            <div
              class="meal position-relative overflow-hidden cursor-pointer rounded-2" data-category=${
                data[i].strCategory
              }
            >
              <img src="${data[i].strCategoryThumb}" alt="" class="w-100" />
              <div class="overlay">
                <h3>${data[i].strCategory}</h3>
                <p>
                  ${data[i].strCategoryDescription
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")}
                </p>
              </div>
            </div>
          </div>
`;
      document.getElementById("categories").innerHTML = catConatiner;
    }
  }

  displayArea(data) {
    let areaConatiner = ``;
    for (let i = 0; i < data.length; i++) {
      areaConatiner += `   <div class="col-md-3">
            <div class="rounded-2 text-center cursor-pointer" data-area=${data[i].strArea}>
              <i class="fa-solid fa-house-laptop fa-4x"></i>
              <h3>${data[i].strArea}</h3>
            </div>
          </div>
`;
      document.getElementById("area").innerHTML = areaConatiner;
    }
  }
  displayIngredients(data) {
    let ingredientsConatiner = ``;
    for (let i = 0; i < data.length; i++) {
      ingredientsConatiner += `   <div class="col-md-3">
            <div class="rounded-2 text-center cursor-pointer" data-ingredient=${
              data[i].strIngredient
            }>
              <i class="fa-solid fa-drumstick-bite fa-4x"></i>
              <h3>${data[i].strIngredient}</h3>
              <p>
                ${data[i].strDescription.split(" ").slice(0, 20).join(" ")}
              </p>
            </div>
          </div>
`;
      document.getElementById("ingredients").innerHTML = ingredientsConatiner;
    }
  }

  displayDetails(data) {
    console.log(data);
    let ingredients = ``;

    for (let i = 1; i <= 20; i++) {
      if (data.meals[0][`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${
          data.meals[0][`strMeasure${i}`]
        } ${data.meals[0][`strIngredient${i}`]}</li>`;
      }
    }

    let tags = data.meals[0].strTags?.split(",");
    // let tags = meal.strTags.split(",")
    if (!tags) tags = [];

    let tagsStr = "";
    for (let i = 0; i < tags.length; i++) {
      tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }

    let detailsConatiner = ``;

    detailsConatiner = `     <div class="col-md-4">
              <img
                class="w-100 rounded-3"
                src="${data.meals[0].strMealThumb}"
                alt=""
              />
              <h2>${data.meals[0].strMeal}</h2>
            </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
             ${data.meals[0].strInstructions}
            </p>
            <h3><span class="fw-bolder">Area : </span>${data.meals[0].strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${data.meals[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
              ${ingredients}
            </ul>

            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
             ${tagsStr}
            </ul>

            <a
              target="_blank"
              href="${data.meals[0].strSource}"
              class="btn btn-success"
              >Source</a
            >
            <a
              target="_blank"
              href="${data.meals[0].strYoutube}"
              class="btn btn-danger"
              >Youtube</a
            >
          </div>
`;
    document.getElementById("details").innerHTML = detailsConatiner;
  }
}
