import './HeroContent.css'
import LeftHeroContent from "./LeftHeroContent/LeftHeroContent"
import RightHeroContent from "./RightHeroContent/RightHeroContent"
export default function HeroContent() {
  return (
    <div className="heroContent-container">
        <LeftHeroContent />
        <RightHeroContent />
    </div>
  )
}
