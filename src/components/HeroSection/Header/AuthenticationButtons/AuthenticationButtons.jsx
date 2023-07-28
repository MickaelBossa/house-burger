import './AuthenticationButtons.css';
import CTAButton from "../../../CtaButton/CTAButton";

export default function AuthenticationButtons() {
  return (
    <div className="authentication-buttons-container">
    <CTAButton txt="Inscription" color='#ffc045' />
    <CTAButton txt="Connexion" color='#3c2515' />
</div>
  )
}
