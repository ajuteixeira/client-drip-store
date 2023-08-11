export default function UnderlinedLink({ text, url }) {
  return (
    <a className="mx-3 underline text-[#474747] cursor-pointer" href={url}>
      {text}
    </a>
  );
}
