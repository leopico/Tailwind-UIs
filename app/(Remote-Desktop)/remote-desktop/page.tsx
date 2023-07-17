import ClientSection from "../components/ClientSection"
import Download from "../components/Download"
import FeatureSection from "../components/FeatureSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import SolutionSection from "../components/SolutionSection"
import UnderLine from "../components/UnderLine"
import WhySection from "../components/WhySection"

const page = () => {
    return (
        <>
            <HeroSection />
            <WhySection />
            <FeatureSection />
            <ClientSection />
            <SolutionSection />
            <UnderLine />
            <Download />
            <Footer />
        </>
    )
}

export default page