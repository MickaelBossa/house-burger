import './HomePage.css';
import Header from '../../components/HeroSection/Header/Header';
import HeroContent from '../../components/HeroSection/HeroContent/HeroContent';

export default function HomePage() {
    return (
        <div className="homePage-container">
            <Header />
            <main style={{width: '90%', margin: '0 auto'}}>
                <HeroContent />
            </main>
        </div>
    );
}
