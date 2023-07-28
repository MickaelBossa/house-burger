import './Header.css';
import AuthenticationButtons from './AuthenticationButtons/AuthenticationButtons';
import Logo from '../../Logo/Logo';
import ClickAndCollectTxt from './ClickAndCollectTxt/ClickAndCollectTxt';

export default function Header() {
    return (
        <header className="header-container">
            <div className='header-logo-txt'>
                <Logo />
                <ClickAndCollectTxt />
            </div>
            <AuthenticationButtons />
        </header>
    );
}
