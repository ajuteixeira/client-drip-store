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
    </>
  );
}
