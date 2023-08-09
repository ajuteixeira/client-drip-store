import tenisImg from '../assets/images/tenisProjReact.png';
export default function Card(props) {
  return (
    <div className={`h-[439px] w-72 flex flex-col`}>
      <div
        className={`
            w-full 
            h-80 
            bg-white 
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
        <img className="" src={tenisImg} alt="" />
      </div>
      <div className={''}>
        <span
        className="
        flex
        text-[12px]
        text-[#8F8F8F]
        "
        >{props.category}Tênis</span>
        <p
        className="
        flex
        text-[16px]
        text-[#474747]
        "
        >{props.productName}K-Swiss V8 - Masculino</p>
        <span className="

        text-[16px]
        text-[#8F8F8F]
        text underline line-through
        "
        >{props.price}$200</span>
        <span className="
        text-[16px]
        text-[#1F1F1F]
        
        "
        >{props.discountPrice}$100</span>
      </div>
      
    </div>
  );
}