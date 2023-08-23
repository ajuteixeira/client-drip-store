export default function Text(props) {
  return (
    <>
      {props.type === 'description' && (
        <p
          className={
            'text-[#474747] max-w-[450px] font-normal text-center text-sm sm:text-lg sm:text-left sm:leading-[34px] leading-[22px] tracking-[0.25px] sm:tracking-[0.75px]'
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

      {props.type === 'mini-description' && (
        <p
          className={
            'text-[#8f8f8f] font-normal text-[10px] leading-[34px] tracking-[0.75px]'
          }
        >
          {props.children}
        </p>
      )}
    </>
  );
}
