import './ClickAndCollectTxt.css'
import bag from '../../../../medias/svg/ico-bag-clickAndCollect.svg';

export default function ClickAndCollectTxt() {
  return (
    <div className="clickAndCollectTxt">
                    <img src={bag} alt="Icone de panier" className="bag" />
                    <p>Commandez votre repas en ligne</p>
                </div>
  )
}
