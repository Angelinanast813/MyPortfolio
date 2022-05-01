import React, {Component} from "react";
import "../styles/MyAppComponent.css";
import Main from "./MainComponent";
import Welcome from "./WelcomeComponent";
import Contact from "./ContactComponent";
import Gallery from "./GalleryComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import GalleryMedia from "./GalleryMediaComponent";

class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastScrollPos: 0,
            aboutClass: "",
            galleryClass: "",
            contactClass: "",
            smallWindow: false,
            welcome: true
        }

        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onResize);
        if (window.innerWidth <= 800 || window.innerWidth >= 2000){
            this.setState({smallWindow: true});
        }
        setTimeout(() => {
            this.setState({
                welcome: false
            })
        }, 2000);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onResize);
    }

    onScroll(){
        const header = document.getElementById("app_header");
        if (!this.state.smallWindow){

            if (window.scrollY === 0){
                header.classList.toggle("header-clr");
            } else {
                header.classList.remove("header-clr");
            }

            if (window.scrollY < this.state.lastScrollPos){
                let isHidden = false;
                for (let i = 0; i < header.classList.length; i++) {
                    if (header.classList[i] === "header-hidden"){
                        isHidden = true;
                    }
                }
                if (!isHidden){
                    header.classList.toggle("header-hidden");
                }
                this.setState({
                    lastScrollPos: window.scrollY
                });
            } else {
                header.classList.remove("header-hidden");
                this.setState({
                    lastScrollPos: window.scrollY
                });
            }


            const about = document.getElementById("about");
            const gallery = document.getElementById("gallery");
            const contact = document.getElementById("contact");

            // eslint-disable-next-line no-restricted-globals
            const aboutTop = about.getBoundingClientRect().top + pageYOffset;
            // eslint-disable-next-line no-restricted-globals
            const galleryTop = gallery.getBoundingClientRect().top + pageYOffset;
            // eslint-disable-next-line no-restricted-globals
            const contactTop = contact.getBoundingClientRect().top + pageYOffset;

            if (window.scrollY >= aboutTop && window.scrollY < galleryTop){
                this.setState({
                    aboutClass: "app-hov",
                    galleryClass: "",
                    contactClass: ""
                })
            } else if (window.scrollY >= galleryTop && window.scrollY < contactTop){
                this.setState({
                    aboutClass: "",
                    galleryClass: "app-hov",
                    contactClass: ""
                })
            } else if (window.scrollY >= contactTop){
                this.setState({
                    aboutClass: "",
                    galleryClass: "",
                    contactClass: "app-hov"
                })
            } else {
                this.setState({
                    aboutClass: "",
                    galleryClass: "",
                    contactClass: ""
                })
            }
        } else {
            header.classList.remove("header-hidden");
        }
    }

    onResize(){
        if (window.innerWidth <= 800 || window.innerWidth >= 2000){
            this.setState({smallWindow: true})
        } else {
            this.setState({smallWindow: false})
        }
    }

    render() {
        const gallery = this.state.smallWindow ? <GalleryMedia /> : <Gallery />;
        const main = <div>
            <div className="app-nav" id="app_header">
                <div className="container d-flex align-items-center mrg-10">
                    <a href="#main" className="app-image">
                        <img src="/images/angel2.png" alt="Angel" className="app-logo"/>
                    </a>
                    <div id="btns" className="app-navs d-flex justify-content-end align-items-center">
                        <a href="#about" className={"app-menu-item " + this.state.aboutClass}>About me</a>
                        <a href="#gallery" className={"app-menu-item " + this.state.galleryClass}>My sketches</a>
                        <a href="#contact" className={"app-menu-item " + this.state.contactClass}>Contact me</a>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column bground">
                <Main />
                <About />
                {gallery}
                <Contact />
                <Footer />
            </div>
        </div>

        const app = this.state.welcome ? <Welcome /> : main;

        return(
            <div>
                {app}
            </div>

        );
    }
}

export default MyApp;