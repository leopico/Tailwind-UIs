import Card from "../components/Card"
import Developer from "../components/Developer"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MeetupSection from "../components/MeetupSection"
import ResourceSection from "../components/ResourceSection"

const page = () => {
    return (
        <>
            <Hero />
            <Card />
            <Developer />
            <MeetupSection />
            <ResourceSection />
            <Footer />
        </>
    )
}

export default page