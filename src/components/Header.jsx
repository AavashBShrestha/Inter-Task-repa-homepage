import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "../main.jsx";
import logo from "../assets/Logo/Logo.svg";

const NAV_LINKS = [
  { path: "/", label: "Rooms" },
  { path: "/", label: "Programs" },
  { path: "/", label: "Workshop" },
  { path: "/", label: "Contact" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left-section">
          <button
            type="button"
            className="header__menu"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            <span className="header__menu-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_86_231)">
                  <path d="M21 18H2V20H21V18ZM19 10V14H4V10H19ZM20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8ZM21 4H2V6H21V4Z" fill="rgba(59, 39, 19, 1)" />
                </g>
                <defs>
                  <clipPath id="clip0_86_231">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="header__menu-text">MENU</span>
          </button>

          <nav className="header__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                to={link.path}
                className="header__nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header__center-section">
          <div className="header__logo" aria-label="Repa Retreat Home">
            <img src={logo} alt="Repa Retreat Logo" />
          </div>
        </div>

        <div className="header__right-section">
          <div className="header__language">
            <div className="header__language-flagIcon">
              <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 8.26367H33.5V26.7359H2.5V8.26367Z" fill="white" />
                <path d="M2.5 8.26367H33.5V10.6942H2.5V8.26367ZM2.5 12.6387H33.5V14.5831H2.5V12.6387ZM2.5 16.5276H33.5V18.472H2.5V16.5276Z" fill="#D22F27" />
                <path d="M2.5 8.26367H18.5V18.472H2.5V8.26367Z" fill="#1E50A0" />
                <path d="M2.5 20.4165H33.5V22.3609H2.5V20.4165Z" fill="#D22F27" />
                <path d="M4.5 11.5451C4.98325 11.5451 5.375 11.1643 5.375 10.6944C5.375 10.2246 4.98325 9.84375 4.5 9.84375C4.01675 9.84375 3.625 10.2246 3.625 10.6944C3.625 11.1643 4.01675 11.5451 4.5 11.5451Z" fill="white" />
                <path d="M8.5 11.5451C8.98325 11.5451 9.375 11.1643 9.375 10.6944C9.375 10.2246 8.98325 9.84375 8.5 9.84375C8.01675 9.84375 7.625 10.2246 7.625 10.6944C7.625 11.1643 8.01675 11.5451 8.5 11.5451Z" fill="white" />
                <path d="M12.5 11.5451C12.9832 11.5451 13.375 11.1643 13.375 10.6944C13.375 10.2246 12.9832 9.84375 12.5 9.84375C12.0168 9.84375 11.625 10.2246 11.625 10.6944C11.625 11.1643 12.0168 11.5451 12.5 11.5451Z" fill="white" />
                <path d="M16.5 11.5451C16.9832 11.5451 17.375 11.1643 17.375 10.6944C17.375 10.2246 16.9832 9.84375 16.5 9.84375C16.0168 9.84375 15.625 10.2246 15.625 10.6944C15.625 11.1643 16.0168 11.5451 16.5 11.5451Z" fill="white" />
                <path d="M14.5 13.4895C14.9832 13.4895 15.375 13.1086 15.375 12.6388C15.375 12.169 14.9832 11.7881 14.5 11.7881C14.0168 11.7881 13.625 12.169 13.625 12.6388C13.625 13.1086 14.0168 13.4895 14.5 13.4895Z" fill="white" />
                <path d="M10.5 13.4895C10.9832 13.4895 11.375 13.1086 11.375 12.6388C11.375 12.169 10.9832 11.7881 10.5 11.7881C10.0168 11.7881 9.625 12.169 9.625 12.6388C9.625 13.1086 10.0168 13.4895 10.5 13.4895Z" fill="white" />
                <path d="M6.5 13.4895C6.98325 13.4895 7.375 13.1086 7.375 12.6388C7.375 12.169 6.98325 11.7881 6.5 11.7881C6.01675 11.7881 5.625 12.169 5.625 12.6388C5.625 13.1086 6.01675 13.4895 6.5 13.4895Z" fill="white" />
                <path d="M4.5 15.4338C4.98325 15.4338 5.375 15.0529 5.375 14.5831C5.375 14.1133 4.98325 13.7324 4.5 13.7324C4.01675 13.7324 3.625 14.1133 3.625 14.5831C3.625 15.0529 4.01675 15.4338 4.5 15.4338Z" fill="white" />
                <path d="M8.5 15.4338C8.98325 15.4338 9.375 15.0529 9.375 14.5831C9.375 14.1133 8.98325 13.7324 8.5 13.7324C8.01675 13.7324 7.625 14.1133 7.625 14.5831C7.625 15.0529 8.01675 15.4338 8.5 15.4338Z" fill="white" />
                <path d="M12.5 15.4338C12.9832 15.4338 13.375 15.0529 13.375 14.5831C13.375 14.1133 12.9832 13.7324 12.5 13.7324C12.0168 13.7324 11.625 14.1133 11.625 14.5831C11.625 15.0529 12.0168 15.4338 12.5 15.4338Z" fill="white" />
                <path d="M16.5 15.4338C16.9832 15.4338 17.375 15.0529 17.375 14.5831C17.375 14.1133 16.9832 13.7324 16.5 13.7324C16.0168 13.7324 15.625 14.1133 15.625 14.5831C15.625 15.0529 16.0168 15.4338 16.5 15.4338Z" fill="white" />
                <path d="M14.5 17.3786C14.9832 17.3786 15.375 16.9978 15.375 16.5279C15.375 16.0581 14.9832 15.6772 14.5 15.6772C14.0168 15.6772 13.625 16.0581 13.625 16.5279C13.625 16.9978 14.0168 17.3786 14.5 17.3786Z" fill="white" />
                <path d="M10.5 17.3786C10.9832 17.3786 11.375 16.9978 11.375 16.5279C11.375 16.0581 10.9832 15.6772 10.5 15.6772C10.0168 15.6772 9.625 16.0581 9.625 16.5279C9.625 16.9978 10.0168 17.3786 10.5 17.3786Z" fill="white" />
                <path d="M6.5 17.3786C6.98325 17.3786 7.375 16.9978 7.375 16.5279C7.375 16.0581 6.98325 15.6772 6.5 15.6772C6.01675 15.6772 5.625 16.0581 5.625 16.5279C5.625 16.9978 6.01675 17.3786 6.5 17.3786Z" fill="white" />
                <path d="M2.5 24.3057H33.5V26.7362H2.5V24.3057Z" fill="#D22F27" />
                <path d="M2.5 8.26367H33.5V26.7359H2.5V8.26367Z" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="header__language-text">En</span>
            <span className="header__language-icon" aria-hidden="true">
              <FontAwesomeIcon icon={["fas", "angle-down"]} />
            </span>
          </div>

          <button
            type="button"
            className="header__join-now"
            aria-label="Join Now"
          >
            <span className="header__join-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.9912 6.01009L5.39919 10.5631L9.59419 12.9911L13.2932 9.29109C13.4808 9.10358 13.7353 8.99829 14.0005 8.99839C14.2658 8.99848 14.5202 9.10395 14.7077 9.29159C14.8952 9.47923 15.0005 9.73367 15.0004 9.99894C15.0003 10.2642 14.8948 10.5186 14.7072 10.7061L11.0072 14.4061L13.4372 18.6001L17.9912 6.01009ZM18.3142 3.76609C19.5092 3.33309 20.6672 4.49109 20.2342 5.68609L14.9522 20.2911C14.5182 21.4891 12.8822 21.6351 12.2432 20.5321L9.02619 14.9741L3.46819 11.7571C2.36519 11.1181 2.51119 9.48209 3.70919 9.04809L18.3142 3.76609Z" fill="rgba(59, 39, 19, 1)" />
              </svg>

            </span>
            <span className="header__join-text">JOIN NOW</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
