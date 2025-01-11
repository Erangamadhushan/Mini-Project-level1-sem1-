window.addEventListener("DOMContentLoaded", () => {
    renderFooterContent();
});

function renderFooterContent() {
    document.querySelector('footer').innerHTML = `
        <div class="container-fluid footer">
            <div class="footer_color">
                <div class="row">
                    <div class="col-lg-3 pt-5 footer_link">
                        <div>
                            <a href="https://www.srilanka.travel/" target="_blank">Sri Lanka Travel</a>
                            <a href="https://nationalholidayresorts.lk/" target="_blank">National Holiday Resorts</a>
                            <a href="https://www.slithm.edu.lk/" target="_blank">Sri Lanka Institude of Tourism & Hotel Management</a>
                            <a href="https://www.worldtravelawards.com/" target="_blank">Tourism Awards</a>
                        </div>
                    </div>
                    <div class="col-lg-3 pt-5 footer_link">
                        <div>
                            <a target="_blank" href="https://www.google.lk/maps/@7.8417541,80.7728782,7.75z" tabindex="0">Site Map</a>
                            <a href="complaints.php">Complaints</a>
                        </div>
                    </div>
                    <div class="col-lg-3 pt-5">
                        <div class="footer_description">
                            <h3>Contact Us</h3>
                            <h4>Address</h4>
                            <p>
                                Sri Lanka Tourism Development
                                Authority
                                No 80.Galle road.
                                Colombo 03
                            </p>
                            <h4>Telephone</h4>
                            <p>
                                +94 112345678
                                0123456789
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-3 pt-5">
                        <div class="footer_description">
                            <h4>Fax</h4>
                            <p>
                                +94 112 444165/2426984
                            </p>
                            <h4>Email</h4>
                            <p>
                                info@beautysrilanka.travel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}