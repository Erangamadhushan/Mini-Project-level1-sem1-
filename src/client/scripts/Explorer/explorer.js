import { explorer } from "./explorerContent.js";

window.addEventListener("DOMContentLoaded", () => {
    renderReasonSection();
    renderwildlifeContent(explorer.wildlife[0]);
    renderwelcomePeople(explorer.welcomePeople[0]);
    renderculturalHeritage(explorer.culturalHeritage[0]);
    renderplantation(explorer.plantation[0]);
    renderclimate(explorer.climate[0]);
    rendertrainJourney(explorer.trainJourney[0]);
    renderBeach(explorer.beaches[0]);
    renderEscapes(explorer.escapes[0]);
    renderlocalFood(explorer.localFood[0]);
});

function renderReasonSection() {
    const reasonsContainer = document.getElementById('reasons');
    let reasonContent = `
        <div>
            <h3 class="text-center text-success">
                Sri Lanka oftern referred to as the "Pearl of the Indian Ocean," is a captivationg island nation renownded for its rich cultural heritage, deverse landscapes and warm hostitality. From sun-kkissed beaches to ancient temples and lush tea plantations, the country offers a plethora of experiences for traverlers.
            </h3>
        </div>
    `;
    reasonsContainer.innerHTML = reasonContent;
}

function renderwildlifeContent(itemContent) {
    const wildlifeContentContainer = document.querySelector("#wildlife");
    let wildlifeContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner w-100">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    wildlifeContentContainer.innerHTML = wildlifeContent;   
}
function renderwelcomePeople(itemContent) {
    const welcomePeopleContainer = document.querySelector("#welcomePeople");
    let welcomePeopleContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    welcomePeopleContainer.innerHTML = welcomePeopleContent; 
}
function renderculturalHeritage(itemContent) {
    const culturalHeritageContainer = document.querySelector("#culturalHeritage");
    let culturalHeritageContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    culturalHeritageContainer.innerHTML = culturalHeritageContent; 
}
function renderplantation(itemContent) {
    const  plantationContainer = document.querySelector("#plantation");
    let  plantationContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    plantationContainer.innerHTML = plantationContent; 
}
function renderclimate(itemContent) {
    const  climateContainer = document.querySelector("#climate");
    let  climateContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    climateContainer.innerHTML = climateContent; 
}
function rendertrainJourney(itemContent) {
    const  trainJourneyContainer = document.querySelector("#trainJourney");
    let  trainJourneyContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    trainJourneyContainer.innerHTML = trainJourneyContent; 
}
function renderBeach(itemContent) {
    const  beachContainer = document.querySelector("#beaches");
    let  beachContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    beachContainer.innerHTML = beachContent; 
}
function renderEscapes(itemContent) {
    const  escapesContainer = document.querySelector("#escapes");
    let  escapesContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    escapesContainer.innerHTML = escapesContent; 
}
function renderlocalFood(itemContent) {
    const  localFoodContainer = document.querySelector("#localFood");
    let  localFoodContent = `
        <h2 class="text-success pb-3">${itemContent.title}</h2>
        <div class="col-md-5">
            <div id="${itemContent.title}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${itemContent.img1}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                    <div class="carousel-item">
                        <img src="${itemContent.img2}" alt="${itemContent.title}" class="d-block w-100 h-100" style="width:100%;"/>
                    </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#${itemContent.title}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#${itemContent.title}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        <div class="col-md-7 py-5">
            <p class="py-4">${itemContent.desc}</p>
            <button type="button" class="btn btn-outline-success">Explorer More ..</button>
        </div>
    `;

    localFoodContainer.innerHTML = localFoodContent; 
}