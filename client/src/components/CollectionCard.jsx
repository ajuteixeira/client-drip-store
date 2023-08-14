import Button from '../components/Button';

export default function CollectionCard(props) {
  return (
      <div
        className={`
            w-[405px]
            h-[251px]
            bg-[#D8E3F2] 
            rounded
            shadow-[6px_16px_30px_0px_rgba(105,98,98,0.05)] 
            flex
            justify-center 
            items-center
            relative
            overflow-hidden
        `}
      >
        <span
          className="
                absolute 
                top-5
                left-5 
                px-4 
                py-2 
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

        <span
          className=" 
                absolute
                flex
                font-bold
                text-[#1F1F1F]
                text-2xl
                left-4
                px-1 
                               
                max-w-[150px]       
             "
        >
          {props.title}
        </span>

        <div className="flex absolute bottom-3 left-5 z-10">
          <Button type="default" color="white" title="Comprar" />
        </div>
        <img
          className="
          absolute
          flex
          bottom-0
          right-0
             "
          src={props.img}
          alt=""
        />
      </div>
  );
}
