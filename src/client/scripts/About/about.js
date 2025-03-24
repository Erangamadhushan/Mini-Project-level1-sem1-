window.addEventListener("DOMContentLoaded", () => {
    renderRootContent();
});

function renderRootContent() {
    const rootSection = document.querySelector('.root');
    let rootContent = `
        <div class="row py-5 gap-3 d-flex justify-content-center">
            <div class="col-md-5 py-5 border border-sm">
                <div class=" border border-white rounded px-3 py-4">
                    <div class="px-2 ">
                        <h3 class="text-success py-2 text-center">Vision</h3>
                        <p class="h5">
                            To inspire and empower people to explore the world, create unforgettable memories, and foster a deeper understanding of diverse cultures through seamless and accessible travel experiences.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-5  py-5 " data-aos="fade-up" data-aos-duration="1000">
                <div class="border border-white rounded px-3 py-4">
                    <div class="px-2">
                        <h3 class="text-success py-2">Mission</h3>
                        <p class="h5">
                            Our mission is to be the ultimate travel companion, providing comprehensive, reliable, and personalized resources that cater to every traveler's needs.
                            We aim to simplify the journey from planning to booking, offering expert advice, curated experiences, and innovative tools that turn dream destinations into reality.
                            Through our commitment to sustainability and cultural respect, we strive to make travel not just an adventure, but a force for positive change.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2 py-5">
            <div class="">
                    <p class="text-center">
                        About We want to create a one platform that helps you plan your trip to any destination. 
                        Whether you are a local or a foreign traveler, you will find everything you need to know 
                        about your chosen place. You will get a general overview of Sri Lanka and its current 
                        situation. You will learn about the weather, the attractions, and the dos and don'ts of 
                        each location. You will also discover the best ways to get around and the nearest 
                        facilities like police stations, ATMs, banks, pharmacies, and more. Our platform is your 
                        one-stop guide to enjoy your travel experience.
                    </p>
                </div>
        </div>
    `;
    rootSection.innerHTML = rootContent;
}