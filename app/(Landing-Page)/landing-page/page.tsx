import DeviceSection from "../components/DeviceSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import InviteFriendOne from "../components/InviteFriendOne"
import InviteFriendThree from "../components/InviteFriendThree";
import InviteFriendTwo from '../components/InviteFriendTwo';

const page = () => {
    return (
        <>
            <Hero />
            <InviteFriendOne />
            <InviteFriendTwo />
            <InviteFriendThree />
            <DeviceSection />
            <Footer />
        </>
    )
}

export default page