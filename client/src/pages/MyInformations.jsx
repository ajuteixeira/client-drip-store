import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuRequests from "../components/MenuRequests";
import Informations from '../components/Informations';




export default function MyRequests () {

    return (
        <>
        <Header />
        <div className="bg-[#F9F8FE] flex gap-4 h-[900px] w-full px-[100px] pt-[80px]">
            
        <div> <MenuRequests /> </div>
        <div> <Informations /> </div>

        </div>


        <Footer />
        
        
        </>
    );
}