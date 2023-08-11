import facebookicon from '../assets/images/facebook.svg';
import instagramicon from '../assets/images/instagram.svg';
import twittericon from '../assets/images/twitter.svg';

export default function FooterIcons() {
  return (
    <>
      <div className="py-4 flex items-center">
        <a href="#">
          <img className="mx-3 w-2" src={facebookicon} alt="Ícone Facebook" />
        </a>
        <a href="#">
          <img className="mx-3 w-4" src={instagramicon} alt="Ícone Instagram" />
        </a>
        <a href="#">
          <img className="mx-3 w-4" src={twittericon} alt="Ícone Twitter" />
        </a>
      </div>
    </>
  );
}
