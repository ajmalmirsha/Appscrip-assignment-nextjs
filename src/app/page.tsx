import Banner from "./components/Banner";
import Community from "./components/Community";
import Earn from "./components/Earn";
import Footer from "./components/Footer";
import ImageSec from "./components/ImageSec";
import Keyfeatures from "./components/KeyFeatures";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Keyfeatures />
      <Section />
      <ImageSec />
      <Earn />
      <Community />
      <Footer />
    </>
  );
}
