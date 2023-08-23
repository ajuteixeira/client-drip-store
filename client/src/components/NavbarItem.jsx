import { NavLink } from 'react-router-dom';

export default function NavbarItem(props) {
  return (
    <>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          isActive
            ? 'text-[#C92071] leading-6 text-xs cursor-pointer underline underline-offset-4'
            : 'text-[#474747] leading-6 text-xs cursor-pointer'
        }
      >
        {props.title}
      </NavLink>

      <NavLink
        to={props.path}
      >

      </NavLink>
    </>
  );
}
