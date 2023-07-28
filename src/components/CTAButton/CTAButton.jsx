/* eslint-disable react/prop-types */
import './CTAButton.css';

export default function CTAButton({ txt, color }) {
    return (
        <div className="CTAButton-container" style={{ backgroundColor: color }}>
            {txt}
        </div>
    );
}
