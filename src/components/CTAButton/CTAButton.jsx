/* eslint-disable react/prop-types */
import './CTAButton.css';

export default function CTAButton({ txt, color, width }) {
    return (
        <button className="CTAButton-container" style={{ backgroundColor: color, width: width }}>
            {txt}
        </button>
    );
}
