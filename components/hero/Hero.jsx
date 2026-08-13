import TrustIndicators from "./TrustIndicators";
import HeroVisual from "./HeroVisual";

function Hero () {
    return (
        <>
        <h1>EDENEST</h1>
        <p>Where trust finds the right people.</p>
        
        <button type="button">Find Trusted Help</button>
        <button type="button">Find Opportunities</button>
        
        <HeroVisual />
        <TrustIndicators />
        </>
    );
}
export default Hero;
