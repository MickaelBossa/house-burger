import './Header.css';
import logo from '../../../medias/svg/Logo-burger-house.svg';
import Bag from '../../../medias/svg/ico-bag-clickAndCollect.svg';
import CTAButton from '../../CtaButton/CTAButton';

export default function Header() {
    return (
        <div className="header-container">
            <div className='header-logo-txt'>
                <img src={logo} alt="Logo de Burger House" className="logo" />
                <div className="clickAndCollectTxt">
                    <img src={Bag} alt="Icone de panier" className="bag" />
                    <p>Commandez votre repas en ligne</p>
                </div>
            </div>
            <div className="authentication-buttons-container">
                <CTAButton txt="Inscription" color='#ffc045' />
                <CTAButton txt="Connexion" color='#3c2515' />
            </div>
        </div>
    );
}
