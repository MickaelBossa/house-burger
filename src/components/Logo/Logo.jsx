import './Logo.css'
import logo from '../../medias/svg/Logo-burger-house.svg'

export default function Logo() {
  return (
    <img src={logo} alt="Logo de Burger House" className="logo" />
  )
}
