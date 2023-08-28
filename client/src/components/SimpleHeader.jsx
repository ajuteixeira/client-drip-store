import logoHeader from '../assets/images/logo-header.svg';

export default function SimpleHeader() {
  return (
    <header className="px-7 py-5 bg-white">
      <a
        href="#"
        className="flex justify-center items-center md:justify-start md:px-12"
      >
        <img className="w-40" src={logoHeader} alt="logo digital store" />
      </a>
    </header>
  );
}
