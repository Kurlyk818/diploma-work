import largeLogo from "../../img/a_la_tarantazza_logo.png";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-line"></div>
            <div className="extras">
                <img src={largeLogo} alt="Large A La Tarantazza Logo" className="large-logo-img" />
                <div className="extra-link-lists">
                    <div className="extra-list">
                        <h4>What We Do</h4>
                        <ul>
                            <li><a href="#">Cookbooks</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Awards</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Locations</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Join Us</h4>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Plant Fruit Trees</a></li>
                            <li><a href="#">Summer Hike</a></li>
                            <li><a href="#">Spring Picnic</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="#">Help/Contact Us</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Consent</a></li>
                            <li><a href="#">No Ads Policy</a></li>
                        </ul>
                    </div>
                    <div className="extra-list">
                        <h4>Partners</h4>
                        <ul>
                            <li><a href="#">Charity for the Future</a></li>
                            <li><a href="#">Be The Miracle Blood Drive</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}