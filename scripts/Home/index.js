import { textContent, img } from "./welcome.js";
import { foreign, local } from "./whoyouare.js";
import { beachSideContent, touristResourts} from './resource.js';


window.addEventListener("DOMContentLoaded", () => {
    renderPageWelcomeSection(textContent, img);
    renderExplorerDate();
    renderRelativeSectionContent(foreign, local);
    renderMainDescription();
    renderFoodStyles();
    renderTouristResourts(touristResourts);
    renderBeachSideContent(beachSideContent);
    renderNewsLatterContent();
});

function renderMainDescription() {
    const mainDesc = document.querySelector('.mainDescription');
    mainDesc.innerHTML = `
        <div class="row justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <div class="col-md-7 grid place-items-center img_row" >
                <div class="text_row box1 p-5" onload="myFunction1()" >
                    <h1 class="text-white mainName"><span>S</span>tart <span>t</span>o <span>F</span>inish</h1>
                    <p class="text-white">Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait.</p>
                </div>
            </div>
        </div>
    `;
};

function renderFoodStyles() {
    const foodStylesContainer = document.querySelector('.foodStylesContainer');
    foodStylesContainer.innerHTML = `
        <div class="row py-4" data-aos="fade-up" data-aos-duration="1000">
            <h2 class="text-center text-success">Sri Lankan Food Styles</h2>
            <p class="text-center text-success">Sri Lankan cuisine is characterized by its distinctive blend of herbs, spices, fish, vegetables, rice, and fruits. The culinary experience offers a complex interplay of flavors, featuring sweet caramelized onion relishes, bitter melon, spicy coconut, and carefully balanced curry heat.</p>
        </div>
        <div class="row py-1 d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-duration="1000">
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle1.jpg" alt=""/>
            </div>
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle2.jpg" alt=""/>
            </div>
            <div class="col-md-3">
                <img src="./assets/images/Home/foodStyle3.jpg" alt=""/>
            </div>
        </div>
        <div class="row py-4 justify-content-center">
            <div class"d-grid place-items-center">
                <a href="./food_styles.html" class="btn btn-outline-success">Explorer More ..</a>
            </div>
        </div>
    `
}

function renderPageWelcomeSection(textContent, img) {
    const welcometextContainer = document.querySelector('.welcometextContainer');
    welcometextContainer.innerHTML = " ";
    let  welcomeTextContent = `
        <div class="row d-flex p-2 flex-column" data-aos="fade-up" data-aos-duration="1000">
            <div class="py-5">
                <h2 class="text-success font-bold text-center">${textContent[0]}</h2>
                <p class="text-center text-xl">${textContent[1]}</p>
            </div>
            <div class="row ">

    `
    img.forEach((ele) => {
        welcomeTextContent += `
            <div class="col-sm-4 py-2 welcomeImg ">
                <img src="${ele.src}" alt="${ele.alt}"/>
            </div>
        `
    });
    welcomeTextContent += `
            </div>
        </div>

    `;
    welcometextContainer.innerHTML = welcomeTextContent;
    console.log(welcomeTextContent);

}

//render subscribtion section

function renderExplorerDate() {
    const explorerIslandContainer = document.querySelector('.explorerIsland');
    explorerIslandContainer.innerHTML = `
        <div class="row py-5" data-aos="fade-up" data-aos-duration="1000">
            <div class="col-md-7 d-flex flex-column justify-content-center">
                <h2 class="text-xxl py-2">Explore Island Stories</h2>
                <p class="text-lg py-2">Each place, and each smile in Sri Lanka has a story to tell. We have so much to share with you, so come along to our island in paradise!</p>
                <p>Sri Lanka offers a diverse range of experiences for explorers, combining natural beauty, cultural heritage, and adventure opportunities:</p>
            </div>
            <div class="col-md-5 d-flex justify-content-center align-items-center">
                <a href="https://the-shooting-star.com/offbeat-sri-lanka/" target="_blank" type="button" class="btn btn-outline-primary btn-lg">EXPLORE MORE..</a>
            </div>
        </div>
        <div class="row py-5 d-flex justify-content-center explorerIslandContainer">
            <div class="col-md-9">
                <h5 class="text-3">Sri Lanka, often referred to as the "Pearl of the Indian Ocean," is a captivating island nation renowned for its rich cultural heritage, diverse landscapes, and warm hospitality. From sun-kissed beaches to ancient temples and lush tea plantations, the country offers a plethora of experiences for travelers.</h5>
            </div>
            <div class="col-md-2 explorerIslandDetails">
                <a href="#" class="btn btn-lg btn-outline-primary">Find Out...</a>
            </div>
        </div>
   `;
}

function renderRelativeSectionContent(foreign, local) {
    console.log(foreign[0].desc[0]);
    const relativeContainer = document.querySelector('.p_relative');
    relativeContainer.innerHTML = `
        <div class="container py-2 topic">
            <h1 class="text-success text-center">Welcome to Our Tourism Portal!</h1>
            <p class="text-center">We recognize that visitors have different needs and preferences, so we've customized our content for both local and international travelers.</p>
        </div>
        <div class="container-fluid py-2 ">
    `;
    relativeContainer.innerHTML += `
            <div class="row py-5 justify-content-center gap-3 py-2">
                <div class="col-lg-5 p-3 sectionborder">
                    <h2 class="text-center py-3">${foreign[0].topic}</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${foreign[0].img}" alt="${foreign.topic}"/>
                            <a href="#" class="btn btn-lg mt-5 btn-outline-success">${foreign[0].buttonText}</a>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>${foreign[0].desc[0]}</li>
                                <li>${foreign[0].desc[1]}</li>
                                <li>${foreign[0].desc[2]}</li>
                            </u>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 p-3 sectionborder">
                    <h2 class="text-center py-3">${local[0].topic}</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${local[0].img}" alt="${local[0].topic}"/>
                            <a href="#" class="btn btn-lg mt-5 btn-outline-success ">${local[0].buttonText}</a>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>${local[0].desc[0]}</li>
                                <li>${local[0].desc[1]}</li>
                                <li>${local[0].desc[2]}</li>
                            </u>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    
}

function renderTouristResourts(touristResourts) {
    const explorerTouristRosourtsContainer = document.querySelector('.explorerTouristResourts');
    let explorerTouristResourtsContent = `
        <div class="row d-flex justify-content-center">
            <div class="col-md-5">
                <div class="py-2 imgItem">
                    <img src="${touristResourts[0]}" alt=""/>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                    </div>
                </div>
                <div class="row d-flex align-items-sketch row-cols-2 py-3">
                    <div class="imgItem">
                        <img src="${touristResourts[1]}" alt=""/>
                        <div class="d-flex justify-content-center align-items-center subItem">
                            <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                        </div>
                    </div>
                    <div class="imgItem">
                        <img src="${touristResourts[2]}" alt=""/>
                        <div class="d-flex justify-content-center align-items-center subItem">
                            <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                        </div>
                    </div>
                </div>
                <div class="py-3 imgItem">
                    <img src="${touristResourts[3]}" alt=""/>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                    </div>
                </div>

            </div>
            <div class="col-md-5">
                <div class="row row-cols-2 py-3 ">
                    <div class="imgItem ">
                        <img src="${touristResourts[4]}" alt=""/>
                        <div class="d-flex justify-content-center align-items-center subItem">
                            <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                        </div>
                    </div>
                    <div class="imgItem">
                        <img src="${touristResourts[5]}" alt=""/>
                        <div class="d-flex justify-content-center align-items-center subItem">
                            <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                        </div>
                    </div>
                </div>
                <div class="py-3 imgItem">
                    <img src="${touristResourts[6]}" alt=""/>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                    </div>
                </div>
                <div class="py-3 imgItem">
                    <img src="${touristResourts[7]}" alt=""/>
                    <div class="d-flex justify-content-center align-items-center">
                        <p>Sri Lanka Tourism Development Authority (SLTDA) is the government authority tasked with planning, development, regulation, and policy implementation of tourism and related industries.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    explorerTouristRosourtsContainer.innerHTML = explorerTouristResourtsContent;

}
function renderBeachSideContent(beachSideContent) {
    const explorerBeachSideContainer = document.querySelector('.explorerBeachSides');
    let explorerBeachSideContent = `
        <div class="row py-5">
            <div>
                <h2 class="px-5">Explorer Beach Side</h2>
                <p class="px-5">The country appears to have numerous noteworthy beaches, with various sources listing between 9 to 16 of the best beaches [4] [5]. Each beach destination offers unique experiences, though specific details about individual beaches are limited in the provided search results.</p>
            </div>
            <div class="row d-flex justify-content-around">
            
    `;
    beachSideContent.forEach((ele) => {
        explorerBeachSideContent += `
            <div class="col-lg-4 col-md-5 py-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="card">
                    <img src="${ele.img}" alt="${ele.title}" class="card-img-top"/>
                    <div class="card-body p-3">
                        <h5 class="card-title text-center">${ele.title}</h5>
                        <p class="card-text">${ele.desc}</p>
                        <a href="#" class="btn btn-outline-primary">Explorer More ..</a>
                    </div>
                </div>
            </div>
        `
    });
    
    explorerBeachSideContent += `</div></div> `;
    explorerBeachSideContainer.innerHTML = explorerBeachSideContent;

}

function renderNewsLatterContent() {
    const newsLatterContainer = document.querySelector('.newlatterContainer');
    let newsLatterContent = `
        <div class="row py-5">
            <h3>Subscribe Our Newslater</h3>
            <div class="d-flex"> 
                <p>Sri Lanka's blend of natural beauty, cultural richness, and warm hospitality makes it a compelling destination for travelers seeking diverse experiences.</p>
            </div>
            <div class="d-flex">
                <form action="" class="d-flex gap-2 w-100">
                    <input type="email" name="newslatterportral" placeholder="example123@gmail.com" class="p-3 w-75" id="newslatterportral" required/>
                    <input type="submit" class="btn btn-outline-danger p-3 px-5" value="Subscribe"/>
                </form>
            </div>
        </div>
    `;
    newsLatterContainer.innerHTML = newsLatterContent;
}

/*
This function is used to display the content of the foreign and local sections of the tourism portal.
*/ 
