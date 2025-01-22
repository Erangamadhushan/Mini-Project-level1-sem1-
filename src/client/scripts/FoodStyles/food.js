import { foodContent } from "./foodContent.js";

window.addEventListener("DOMContentLoaded", () => {
    renderFoodContent(foodContent);
});

function renderFoodContent(items) {
    const foodContentContainer = document.getElementById("root");
    let foodContent = `<div class="row py-5 d-flex flex-wrap justify-content-center">`;
    items.forEach((item) => {
        foodContent += `
            <div class="col-md-5 mb-5">
                <div class="card">
                    <img src="${item.img}" alt="${item.desc1}" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center text-primary">${item.title}</h3>
                        <p class="">${item.desc1}</p>
                    </div>
                </div>
            </div>
        `;

    });
    foodContent += `</div>`;
    foodContentContainer.innerHTML = foodContent;
}