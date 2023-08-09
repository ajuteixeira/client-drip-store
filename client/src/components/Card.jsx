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
      <div className="flex flex-col gap-1">
        <span className="text-[#8F8F8F] text-xs font-bold">{props.category}</span>
        <p className="text-[#474747] text-2xl">{props.productName}</p>
        <div className="flex gap-2 items-center">
          <span
            className={`
            text-2xl font-bold
            ${props.isDiscount && 'text-[#8F8F8F] line-through'}
        `}
          >
            {props.price}
          </span>
          {props.isDiscount ? (
            <span className="text-[#1F1F1F] text-2xl font-bold">{props.discountPrice}</span>
          ) : (
            ''
          )}
        </div>
      </div>
      
    </div>
  );
}