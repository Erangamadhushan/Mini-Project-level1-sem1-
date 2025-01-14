window.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
});

function renderNavbar() {
    let headerContainer = document.querySelector("header");
    headerContainer.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="navbar navbar-expand-md navbar-light d-flex align-items-baseline bg-light">
                    <div class="container-fluid d-flex align-items-baseline justify-content-center">
                        <h2 class="navbar-brand"><a href="./index.html" class="text-decoration-none text-dark"><span>S</span>tart <span>t</span>o <span>F</span>inish</a></h2>
                        <button type="button" class="navbar-toggler btn-dark" data-bs-toggle="collapse" data-bs-target="#pageDropdownMenu"><span class=" navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse"" id="pageDropdownMenu">
                            <div class="d-flex justify-content-center">
                                <ul class="navbar-nav d-flex gap-3 justify-content-center">
                                    <li><a href="./index.html" class="nav-link text-dark">Home</a></li>
                                    <li><a href="./about.html" class="nav-link text-dark">About</a></li>
                                    <li><a href="./contact.html" class="nav-link text-dark">Contact</a></li>
                                </uL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

