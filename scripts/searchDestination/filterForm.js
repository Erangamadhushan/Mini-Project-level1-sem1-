window.addEventListener("DOMContentLoaded", () => {
    renderFilterForm();
});

function renderFilterForm() {
    const filterContainer = document.getElementById('filterForm');
    let filterFormContent = `
        <div class="row">
            <h1 class="text-center py-2">Search Destinations</h1>
        </div>
        <div class="row shadow-lg py-3">
            <div class="col-md-6 relative">
                <img src="./assets/images/searchDestination/visitor.png" alt="visitorImg"/>
                <div class="py-1">
                    <h4 class="text-center">Discover Sri Lanka: A Tropical Paradise of Ancient Wonders</h4>
                    <p class="text-center">Welcome to Sri Lanka, the pearl of the Indian Ocean – a mesmerizing island where ancient cities meet pristine beaches, where lush rainforests hide centuries-old temples, and where warm smiles greet you at every turn. From the golden shores of its coastal towns to the misty heights of its hill country, Sri Lanka offers an incredible diversity of experiences in a compact tropical paradise.</p>
                </div>
            </div>
            <div class="col-md-6 flex flex-col py-5">
                <div>
                    <form id="directfilter">
                        <div class="row w-100">
                            <div class="d-flex justify-content-center" >
                                <input type="text" class="rounded" id="directInputField" placeholder="Seeach Destination" style="width:75%;padding:10px;"/>
                            </div>
                            <div class="d-flex justify-content-center py-2">
                                <button type="submit" id="directSubmitButton" class="p-3 bg-success px-5 rounded border border-none text-white">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="advanceSearchOption container py-4">
                    <h2 class="text-center">Advanced Search Option</h2>
                </div>
            
    `;
    filterFormContent += `
        <div class="container">
            <form id="searchfiltering">
                <div class="py-3 d-flex justify-content-center">
                    <input type="text" id="province" class="form-control p-2" style="width:75%;"/>
                </div>
                <div class="py-3 d-flex justify-content-center">
                    <input type="text" id="district" class="form-control p-2" style="width:75%;"/>
                </div>
                <div class="py-3 d-flex justify-content-center">
                    <input type="text" id="city" class="form-control p-2" style="width:75%;"/>
                </div>
                <div class="py-3 d-flex justify-content-center">
                    <input type="submit" class="btn btn-outline-success" value="Search"/>
                </div>
            </form>
        </div>
    `;
    filterFormContent += `
            </div>
        </div>
    `
    filterContainer.innerHTML = filterFormContent;
}

document.getElementById('directSubmitButton').onclick = () => {
    
}