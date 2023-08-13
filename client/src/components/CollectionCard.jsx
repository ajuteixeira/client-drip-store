import tShirtCollection from '../assets/images/tShirtCollection.png'; 
import Button from '../components/Button';



export default function UiTest(props) {
  return <main className="min-w-full">


<div className={`h-[439px] w-72 flex flex-col`}>
      <div
        className={`
            w-338px
            h-212px
            bg-[#D8E3F2] 
            flex-shrink: 0
            rounded
            shadow-[6px_16px_30px_0px_rgba(105,98,98,0.05)] 
            flex
            justify-center 
            items-center
            relative
        `}
      >
        <span
          className="
                absolute 
                top-5
                left-5 
                px-4 
                py-1 
                flex 
                justify-center 
                items-center 
                rounded-full 
                bg-[#E7FF86]
                text-sm
                font-bold
                text-[#474747]
            "
        >
          {props.discountPercentual}% OFF
        </span>

        <span className=" 
        absolute
        flex
        font-bold
        text-[#1F1F1F]
        text-2xl
        left-5 
        py-1        
             "
        >
          Novo drop <br /> Supreme </span>

        <img className="
          relative
          flex
          pl-24          
             " 
        src={tShirtCollection} alt="" />
      </div>

      
      
    </div>

  

    
    
    </main>;
}
