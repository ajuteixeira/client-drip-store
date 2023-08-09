import Cart from './Cart';
import Logo from './Logo';

export default function Header() {
return (
   <div className='flex gap-2 text-[#C92071] hover:text-[#C92071] items-center font-semibold text-4xl '>
   <Logo />
    <h1>Digital Store</h1>

    <Cart />

   </div>
)
}
   
