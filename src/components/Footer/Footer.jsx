import "./Footer.css"
import logo from "../../assets/Logo.svg";


const Footer = () => {
    return(
        <footer className="logoImagem">
                <img src={logo} alt="Logo do Aluraflix" />
              </footer>
    )
}

export default Footer;