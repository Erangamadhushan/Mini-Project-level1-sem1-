window.addEventListener("DOMContentLoaded", () => {
    renderFilterForm();
});

function renderFilterForm() {
    const filterContainer = document.getElementById('filterForm');
    let filterFormContent = `
        <div class="row">
            <h1 class="text-center py-2">Search Destinations</h1>
        </div>
        <div class="row">
            <div class="col-md-6 relative">
                <img src="./assets/images/searchDestination/visitor.png" alt="visitorImg"/>
            </div>
            <div class="col-md-6 flex flex-col">
                <div>
                    <form id="directfilter">
                        <div class="row w-100">
                            <div class="w-75">
                                <input type="text" id="directInputField"/>
                            </div>
                            <div class="w-20">
                                <button type="submit" id="directSubmitButton">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="container">
                    <form id="searchfiltering">
                        <div class="py-3 w-80">
                            <input type="text" id="province" class="form-control p-2"/>
                        </div>
                        <div class="py-3">
                            <input type="text" id="district" class="form-control p-2"/>
                        </div>
                        <div class="py-3">
                            <input type="text" id="city" class="form-control p-2"/>
                        </div>
                        <div class="py-3">
                            <input type="submit" value="Search"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    filterContainer.innerHTML = filterFormContent;
}