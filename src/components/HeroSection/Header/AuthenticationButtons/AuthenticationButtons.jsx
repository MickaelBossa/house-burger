import './AuthenticationButtons.css';
import CTAButton from "../../../CTAButton/CTAButton";

export default function AuthenticationButtons() {
  return (
    <div className="authentication-buttons-container">
    <CTAButton txt="Inscription" color='#ffc045' width={'100px'} />
    <CTAButton txt="Connexion" color='#3c2515' width={'100px'} />
</div>
  )
}
