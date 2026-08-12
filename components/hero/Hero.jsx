import TrustIndicators from "./TrustIndicators";
import HeroVisual from "./HeroVisual";

function Hero () {
    return (
        <>
        <h1>HireNest</h1>
        <p>Trusted Help for Everyday Life</p>
        
        <button type="button">Find Trusted Help</button>
        <button type="button">Find Opportunities</button>
        
        <HeroVisual />
        <TrustIndicators />
        </>
    );
}
export default Hero;
