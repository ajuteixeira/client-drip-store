export default function Text(props) {
  return (
    <>
      {props.type === 'description' && (
        <p
          className={
            'text-[#474747] font-normal text-lg leading-[34px] tracking-[0.75px]'
          }
        >
          {props.children}
        </p>
      )}

       {props.type === 'gray-description' && (
        <p
          className={
            'text-[#8F8F8F] font-normal text-[14px] leading-[34px] tracking-[0.75px]'
          }
        >
          {props.children}
        </p>
      )}

{props.type === 'UPgray-description' && (
        <p
          className={
            'text-[#474747] font-normal text-[14px] leading-[34px] tracking-[0.75px]'
          }
        >
          {props.children}
        </p>
      )}

      
    </>
  );
}
