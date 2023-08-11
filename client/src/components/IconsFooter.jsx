import facebookicon from "../assets/images/facebook.svg"
import instagramicon from "../assets/images/instagram.svg"
import twittericon from "../assets/images/twitter.svg"


export default function IconsFooter() {
    return (
        <>
        <div className="bg-slate-900 flex items-center py-4">
        <img className="mx-3 w-2" src={facebookicon} alt="" />
        <img className="mx-3 w-4" src={instagramicon} alt="" />
        <img className="mx-3 w-4" src={twittericon} alt="" />

        </div>
        
        </>
    )
}