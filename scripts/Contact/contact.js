import { developers } from "./developers.js";

window.addEventListener("DOMContentLoaded", () => {
    renderContactUsContent(developers);
});

function renderContactUsContent(developers) {
    const rootContainer = document.querySelector('.root');
    let rootContent = `
        <div class="row">
            <div class="">
                <p class="h5 text-center">
                    Our mission is to be the ultimate travel companion, providing comprehensive, reliable, and personalized resources that cater to every traveler's needs.
                    We aim to simplify the journey from planning to booking, offering expert advice, curated experiences, and innovative tools that turn dream destinations into reality.
                    Through our commitment to sustainability and cultural respect, we strive to make travel not just an adventure, but a force for positive change.
                </p>
            </div>
        </div>
        <div class="row p-3 py-5 d-flex justify-content-center gap-3">
    `;
    developers.forEach((developer) => {
        rootContent += `
            <div class="col-md-3 d-flex flex-column devcard my-3 py-3">
                <div>
                    <div class="w-100">
                        <img src="${developer.img}" alt="${developer.desc}" class="w-75"/>
                    </div>
                    <div class="">
                        <h4>${developer.name}</h4>
                        <p>${developer.desc}</p>
                    </div>
                </div>
                <div class="bg-success d-flex flex-column justify-content-center p-2">
                    <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-dark">Connect</button>
                    </div>  
                    <div>
                        <a href=${developer.socialMedia.xaddress} ><img src="" alt="${developer.name}"/></a>
                        <a href=${developer.socialMedia.linkinaddress} ><img src="" alt="${developer.name}"/></a>
                        <a href=${developer.socialMedia.gmail} ><img src="" alt="${developer.name}"/></a>
                        <a href=${developer.socialMedia.githubprofile} ><img src="" alt="${developer.name}"/></a>
                        <a href=${developer.socialMedia.facefookUserName} ><img src="" alt="${developer.name}"/></a>
                    </div>                  
                </div>
            </div>
        `
    });
    rootContent += `</div>`;
    rootContainer.innerHTML = rootContent;
}