export default function Category(props) {
    return (
      <>
      
        <div
          className={`
              h-[70px]
              w-[70px]
              bg-[#ffffff] 
              rounded-full
              shadow-[0px_4px_25px_0px_rgba(0,0,0,0.05)] 
              flex
              justify-center 
              items-center
              relative
              
          `}
        >
          <img
            className="
          absolute
          justify-center
          p-3
          "
            src={props.img}
            alt=""
          />
        </div>
  
        <div className="flex justify-center gap-14 text-black">
          
            {props.title}
        </div>
      </>
    );
  }
  