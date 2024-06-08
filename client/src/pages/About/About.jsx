import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Description from "../../components/Description/Description";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function About() {
    return (
        <section className="about">
            <ImageSlider />
            <Description />
            <Reviews />
            <Footer />
        </section>
    )
}