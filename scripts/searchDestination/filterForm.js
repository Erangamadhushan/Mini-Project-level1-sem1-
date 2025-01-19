window.addEventListener("DOMContentLoaded", () => {
    renderFilterForm();
});

function renderFilterForm() {
    const filterContainer = document.getElementById('filterForm');
    let filterFormContent = `
        <div class="row">
            <div class="col-md-6 relative">
                <img src="./assets/images/searchDestination/visitor.png" alt="visitorImg"/>
            </div>
            <div class="col-md-6">

            </div>
        </div>
    `;
    filterContainer.innerHTML = filterFormContent;
}