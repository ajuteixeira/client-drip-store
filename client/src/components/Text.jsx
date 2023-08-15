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
    </>
  );
}
