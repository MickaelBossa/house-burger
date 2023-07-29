import './LeftHeroContent.css';
import Tagline from "../Tagline/Tagline";
import CTAButton from '../../../CTAButton/CTAButton';

export default function LeftHeroContent() {
  return (
    <div>
        <Tagline />
        <h1 className="main-title"><span className='burger-title'>Burger</span><span className='house-title'>House</span>Click&Collect</h1>
        <CTAButton color={'#3c2515'} txt="Créer mon compte" width={'200px'} />
    </div>
  )
}
