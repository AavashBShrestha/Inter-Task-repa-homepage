import { useRef } from "react";
import img1 from "../assets/img/Rectangle 57.png";
import img2 from "../assets/img/Rectangle 56.png";
import img3 from "../assets/img/Rectangle 58.png";
import img4 from "../assets/img/Rectangle 73.png";
import img5 from "../assets/img/Rectangle 63.png";
import img6 from "../assets/img/Rectangle 66.png";
import img7 from "../assets/img/Rectangle 68.png";
import servicebackground from "../assets/img/Rectangle 74.png";
import img8 from "../assets/img/Rectangle 41.png";
import img9 from "../assets/img/Rectangle 43.png";
import img10 from "../assets/img/HotelShangrilla1.png";
import img11 from "../assets/img/HotelShangrilla2.png";
import img12 from "../assets/img/HotelShangrilla3.png";
import img13 from "../assets/img/Rectangle 24.png";
import img14 from "../assets/img/Rectangle 66.png";
import img15 from "../assets/img/Rectangle 60.png";

const BLOCKS = [
  {
    id: "A",
    title: "Block (Building)",
    image: img10,
  },
  {
    id: "B",
    title: "Block (Building)",
    image: img11,
  },
  {
    id: "C",
    title: "Block (Building)",
    image: img12,
  },
];

const UPCOMING_PROGRAMS = [
  {
    title: "Profound Inner Principle Retreat",
    date: "27 February - 2 March 2025",
  },
  {
    title: "The 1st Repa Buddhist Council",
    date: "3 March - 7 March 2025",
  },
  {
    title: "Offering Mandala of the four preliminary Practices",
    date: "9 March - 11 March 2025",
  },
];

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__text">
          <div className="hero__header">
            <h1>
              Embrace your <br />
              Deep spiritual journey
            </h1>
          </div>
          <div className="hero__description">
            <p>
              In the hills where the Great Lotus Born was enlightened, where{" "}
              <br /> beneath lies the Kathmandu valley
            </p>
          </div>
        </div>
      </div>

      <div
        className="pageScrollIndicator"
        onClick={scrollToAbout}
        style={{ cursor: "pointer" }}
      >
        <svg
          width="36"
          height="21"
          viewBox="0 0 36 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8785 20.504L0.427827 2.68341C0.153201 2.38606 0 1.99102 0 1.58021C0 1.1694 0.153201 0.774361 0.427827 0.477015L0.446416 0.457827C0.579549 0.313181 0.7398 0.198002 0.917421 0.119295C1.09504 0.0405884 1.28632 0 1.47962 0C1.67291 0 1.86419 0.0405884 2.04181 0.119295C2.21943 0.198002 2.37968 0.313181 2.51282 0.457827L18.0031 17.2392L33.4872 0.457827C33.6203 0.313181 33.7806 0.198002 33.9582 0.119295C34.1358 0.0405884 34.3271 0 34.5204 0C34.7137 0 34.905 0.0405884 35.0826 0.119295C35.2602 0.198002 35.4204 0.313181 35.5536 0.457827L35.5722 0.477015C35.8468 0.774361 36 1.1694 36 1.58021C36 1.99102 35.8468 2.38606 35.5722 2.68341L19.1215 20.504C18.9768 20.6608 18.8028 20.7855 18.61 20.8708C18.4173 20.956 18.2097 21 18 21C17.7903 21 17.5827 20.956 17.3899 20.8708C17.1972 20.7855 17.0232 20.6608 16.8785 20.504Z"
            fill="white"
          />
        </svg>
      </div>

      <section
        ref={aboutRef}
        className="aboutrepa"
        style={{ scrollMarginTop: "50px" }}
      >
        <div className="about">
          <div className="AboutRepaRetreat">
            <p className="AboutRepaRetreat__title">ABOUT REPA RETREAT</p>
            <div className="AboutRepaRetreat__content">
              <div className="AboutRepaRetreat__header">
                <h1>
                  Tranquil Sanctuary for <br />
                </h1>
                <h2>Meditation Retreats</h2>
              </div>
              <div className="AboutRepaRetreat__description">
                <p className="AboutRepaRetreat__description-paragraph">
                  Repa Retreat is an extraordinary place for meditation, healing
                  and connecting. Its tranquil and secluded location overlooking
                  the Kathmandu valley makes it ideal for both group retreats as
                  well as solitary retreats.
                </p>
              </div>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="AboutRepaRetreat__button"
              >
                <svg
                  className="AboutRepaRetreat__button-arrowbutton"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                    fill="rgba(255, 255, 255, 1)"
                  />
                </svg>
                LEARN MORE
              </button>
            </div>
            <div className="AboutRepaRetreat__images">
              <div className="AboutRepaRetreat__images-img1 ">
                <img src={img1} alt="Indoor yoga session" />
              </div>
              <div className="AboutRepaRetreat__images-img2">
                <img src={img2} alt="Outdoor yoga session" />
              </div>
              <div className="AboutRepaRetreat__images-img3">
                <img src={img3} alt="Indoor meditation" />
              </div>
              <div className="AboutRepaRetreat__images-img4">
                <img src={img4} alt="Outdoor group meditation" />
              </div>
            </div>
          </div>

          <div className="services">
            <div className="services__backgroundImage">
              <img src={servicebackground} alt="Service Background" />
              <div className="services__gradient"></div>
            </div>

            <div className="services__content">
              <div className="services__left">
                <label className="services__title">Our Services</label>

                <div className="services__header">
                  <h1>Repa Retreat</h1>
                  <span className="services__header-thin">Service</span>
                </div>

                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="services__button"
                >
                  <svg
                    className="services__button-arrowbutton"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                      fill="rgba(255, 255, 255, 1)"
                    />
                  </svg>
                  <label>View all services</label>
                </button>
              </div>
              <div className="services__right">
                <p className="services__invite-title">
                  We invite you to join us in this transformative path of growth
                  and enlightenment.
                </p>
              </div>
            </div>
          </div>

          <div className="language">
            <div className="language__nepalilanguage">
              <div className="nepalilanguage__image ">
                <img src={img5} alt="Outdoor group meditation" />
              </div>
              <div className="nepalilanguage__label ">
                <label>
                  Repa Program in{" "}
                  <span className="nepalilanguage__label-span">
                    Nepali Language
                  </span>
                </label>
              </div>
              <div className="nepalilanguage__learnMore ">
                <button className="nepalilanguage__learnMore-btn">
                  <svg
                    className="nepalilanguage__learnMore-arrowbutton"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                      fill="rgba(255, 255, 255, 1)"
                    />
                  </svg>
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="language__chineselanguage">
              <div className="chineselanguage__image ">
                <img src={img6} alt="Outdoor group meditation" />
              </div>
              <div className="chineselanguage__label ">
                <label>
                  Repa Program in{" "}
                  <span className="chineselanguage__label-span">
                    Chinese Language
                  </span>
                </label>
              </div>
              <div className="chineselanguage__learnMore ">
                <button className="chineselanguage__learnMore-btn">
                  <svg
                    className="chineselanguage__learnMore-arrowbutton"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                      fill="rgba(255, 255, 255, 1)"
                    />
                  </svg>
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="language__englishlanguage">
              <div className="englishlanguage__image">
                <img src={img7} alt="Outdoor group meditation" />
              </div>
              <div className="englishlanguage__label ">
                <label>
                  Repa Program in{" "}
                  <span className="englishlanguage__label-span">
                    English Language
                  </span>
                </label>
              </div>
              <div className="englishlanguage__learnMore ">
                <button className="englishlanguage__learnMore-btn">
                  <svg
                    className="englishlanguage__learnMore-arrowbutton"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                      fill="rgba(255, 255, 255, 1)"
                    />
                  </svg>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="quote">
          <div className="quote__image">
            <svg
              width="82"
              height="101"
              viewBox="0 0 82 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.2367 94.03C36.2367 94.03 42.2467 87.3 52.4167 91.38C62.5867 95.46 67.7967 98.18 72.8267 91.68C76.2667 87.3 74.0767 82.34 72.4467 80.68C70.8167 79.02 69.6167 78.12 65.0767 75.05C60.9267 72.25 55.5867 66.36 58.8067 58.53C58.8067 58.53 61.9067 50.52 62.5467 48.97C63.1867 47.42 66.6667 37.63 61.1467 32.79C55.6267 27.95 47.7667 29.5 47.4667 23.23C47.1967 18.81 48.7467 20.17 48.7467 12.61C48.7467 12.61 48.5567 4.18 40.1667 4.18H39.7967C31.4067 4.18 31.2167 12.61 31.2167 12.61C31.3167 19.6 32.7567 19.53 32.5067 23.23C32.2067 29.5 24.3467 27.95 18.8267 32.79C13.3067 37.63 16.7867 47.42 17.4267 48.97C18.0667 50.52 19.7767 54.97 21.1667 58.53C21.7967 60.15 22.2267 63.87 21.3067 66.85C20.2067 70.41 17.4767 73.26 14.8867 75.05C10.3767 78.17 8.75666 79.13 7.12666 80.8C5.50666 82.46 3.53666 87.38 6.97666 91.76C10.3367 96.48 15.4767 96.41 21.2267 94.48C21.2267 94.48 22.9267 93.84 24.4367 94.26C24.4367 94.26 25.3067 94.52 24.4367 95.02C23.5667 95.51 21.4167 96.72 19.7867 97.48C19.1967 97.76 15.8367 99.45 11.8467 99.56C6.38666 99.71 0.126664 96.35 0.0166638 88.33C0.0166638 88.33 -0.923336 81.68 11.3167 74.12C11.3167 74.12 17.6667 70.3 18.5767 66.86C19.4867 63.42 18.1967 59.11 17.4067 56.77C15.5967 51.33 11.4367 46.41 11.4367 39.99C11.4367 39.99 11.0967 30.32 25.7567 27.07C25.7567 27.07 31.1567 26.09 31.0067 23.18C30.8467 20.08 28.0167 15.47 28.0167 10.37C28.0167 5.27 32.9167 0 39.6367 0H41.0567C47.7867 0 52.6567 5.25 52.6567 10.35C52.6567 15.45 49.6067 20.06 49.6667 23.16C49.7267 26.03 54.9167 27.05 54.9167 27.05C69.5767 30.3 69.2367 39.97 69.2367 39.97C69.2367 46.4 65.0767 51.31 63.2667 56.75C62.4767 59.09 61.1667 62.72 62.0767 66.16C62.9867 69.6 67.5167 73.14 69.3467 74.1C83.3467 81.39 81.1967 88.61 80.8167 90.77C79.5267 97.08 73.2067 100.02 67.7367 100.03C63.1967 100.03 61.1767 99.05 60.2567 98.67C59.1867 98.23 52.7067 95.46 49.2167 94.55C44.2667 93.26 37.1967 95.09 36.2567 95.23C36.2567 95.23 34.8967 95.63 36.2167 94.02"
                fill="#EC9B4B"
              />
              <path
                d="M41.0364 83.2297H41.8564C42.2864 83.2297 42.2364 82.9097 42.2364 82.9097V18.8197C42.2664 13.6697 42.8164 14.0897 43.2764 12.7897C43.7264 11.4897 42.7264 11.4297 42.7264 11.4297H37.6164C37.6164 11.4297 36.6064 11.4897 37.0664 12.7897C37.5264 14.0897 38.0764 13.6597 38.1064 18.8197V82.9097C38.1064 82.9097 38.0564 83.2297 38.4864 83.2297H41.0364Z"
                fill="#EC9B4B"
              />
            </svg>
          </div>
          <div className="quote__text">
            <p>
              Immerse yourself in your spiritual journey and experience the
              supportive energy of the hills and caves blessed by many masters
            </p>
          </div>
          <div className="quote__design">
            <svg
              width="276"
              height="648"
              viewBox="0 0 276 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M270.994 -5.16669C270.994 -5.16669 315.939 45.1632 391.995 14.6512C468.051 -15.8608 507.013 -36.2023 544.63 12.4077C570.356 45.1632 553.978 82.2563 541.788 94.6705C529.598 107.085 520.624 113.815 486.672 136.774C455.637 157.714 415.702 201.762 439.782 260.318C439.782 260.318 462.965 320.22 467.752 331.812C472.538 343.404 498.563 416.617 457.282 452.813C416.001 489.009 357.22 477.417 354.977 524.307C352.958 557.362 364.549 547.191 364.549 603.728C364.549 603.728 363.128 666.771 300.384 666.771H297.617C234.873 666.771 233.452 603.728 233.452 603.728C234.2 551.454 244.969 551.977 243.099 524.307C240.856 477.417 182.075 489.009 140.794 452.813C99.5131 416.617 125.538 343.404 130.324 331.812C135.111 320.22 147.899 286.941 158.294 260.318C163.005 248.203 166.221 220.383 159.341 198.097C151.114 171.474 130.698 150.161 111.329 136.774C77.6013 113.441 65.4862 106.262 53.2964 93.7731C41.1813 81.3588 26.4487 44.5649 52.1746 11.8093C77.3022 -23.4889 115.741 -22.9655 158.742 -8.53204C158.742 -8.53204 171.456 -3.74585 182.748 -6.88678C182.748 -6.88678 189.254 -8.83112 182.748 -12.5704C176.242 -16.2348 160.163 -25.2838 147.973 -30.9673C143.561 -33.0613 118.434 -45.6998 88.5946 -46.5225C47.7623 -47.6442 0.947248 -22.5167 0.124619 37.4604C0.124619 37.4604 -6.90512 87.192 84.631 143.729C84.631 143.729 132.119 172.297 138.925 198.023C145.73 223.748 136.083 255.98 130.175 273.48C116.639 314.163 85.5284 350.957 85.5284 398.968C85.5284 398.968 82.9858 471.285 192.62 495.59C192.62 495.59 233.003 502.919 231.882 524.681C230.685 547.864 209.521 582.34 209.521 620.48C209.521 658.62 246.165 698.031 296.421 698.031H307.04C357.37 698.031 393.79 658.769 393.79 620.629C393.79 582.489 370.981 548.014 371.429 524.831C371.878 503.367 410.691 495.739 410.691 495.739C520.325 471.434 517.782 399.118 517.782 399.118C517.782 351.031 486.672 314.312 473.136 273.63C467.228 256.13 457.431 228.983 464.237 203.257C471.042 177.532 504.92 151.058 518.605 143.879C623.303 89.3608 607.225 35.3665 604.383 19.213C594.736 -27.976 547.472 -49.9626 506.565 -50.0374C472.613 -50.0374 457.506 -42.7085 450.626 -39.8667C442.624 -36.5762 394.164 -15.8609 368.064 -9.05554C331.046 0.591675 278.173 -13.0939 271.143 -14.1409C271.143 -14.1409 260.973 -17.1322 270.844 -5.09192"
                fill="url(#paint0_linear_1_325)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_325"
                  x1="303.472"
                  y1="698.031"
                  x2="303.472"
                  y2="-50.0374"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A66D35" stopOpacity="0.5" />
                  <stop offset="0.275" stopColor="#A66D35" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#A66D35" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <section className="repaProgram">
        <div className="repaProgram__summary">
          <div className="left__summary">
            <div className="repaProgram__label">
              <label>Repa Program</label>
            </div>
            <div className="repaProgram__header">
              <h1>
                A Comprehensive <span>Spiritual Journey</span>
              </h1>
            </div>
          </div>
          <div className="repaProgram__description right__summary">
            <p>
              The Repa Program is divided into two main phases: preliminary and
              advanced practices. The preliminary <br /> phase lasts 1 year and
              4 months, while the entire <br />
              program spans 7 years.
            </p>
            <button></button>
          </div>
        </div>
        <div className="practices">
          <div className="practices__preliminary">
            <div className="practices__image-summary">
              <div className="practices__image-context">
                <div className="practices__header">
                  <h1>
                    Preliminary{" "}
                    <span className="practices__header-span">Practices</span>
                  </h1>
                </div>
                <div className="practices__description">
                  <p>
                    The Repa Program is divided into two main phases:
                    preliminary and advanced practices. The preliminary phase
                    lasts 1 year and 4 months, while the entire program spans 7
                    years.
                  </p>
                  <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="practices__button"
                  >
                    <svg
                      className="practices__button-arrowbutton"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                        fill="rgba(255, 255, 255, 1)"
                      />
                    </svg>
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="practices__image">
              <img src={img8} alt="Preliminary Practices" />
              <div className="services__gradient"></div>
            </div>
          </div>
          <div className="practices__advanced">
            <div className="advancedpractices__image-summary">
              <div className="practices__image-context">
                <div className="practices__header">
                  <h1>
                    Advanced{" "}
                    <span className="practices__header-span">Practices</span>
                  </h1>
                </div>
                <div className="practices__description">
                  <p>
                    The Repa Program is divided into two main phases:
                    preliminary and advanced practices. The preliminary phase
                    lasts 1 year and 4 months, while the entire program spans 7
                    years.
                  </p>
                  <button
                    type="button"
                    aria-label="Open navigation menu"
                    className="practices__button"
                  >
                    <svg
                      className="practices__button-arrowbutton"
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                        fill="rgba(255, 255, 255, 1)"
                      />
                    </svg>
                    <p>LEARN MORE</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="practices__advanced-image">
              <img src={img9} alt="Advanced Practices" />
              <div className="practices__advanced-gradient"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="Accommodation">
        <div className="accommodation__header">
          <p className="accommodation__label">ACCOMMODATION</p>
          <h1 className="accommodation__title">
            Your Stay{" "}
            <span className="accommodation__title-span">at Repa Retreat</span>
          </h1>
        </div>
        <div className="blocks">
          {BLOCKS.map((block, index) => (
            <div className="blocks__item" key={`${block.id}-${index}`}>
              <img src={block.image} alt={`Block ${block.id}`} />
              <div className="accommodation__gradient"></div>
              <div className="blocks__overlay">
                <p className="blocks__title">{block.title}</p>
                <span className="blocks__label">{block.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feedback">
        <div className="feedback__image">
          <img src={img13} alt="Feedback" />
        </div>
        <div className="feedback__description">
          <div className="review-wrapper">
            <div className="review-text">
              <div className="google-icon">
                <GoogleGLogo />
              </div>

              <div className="curly-bracket">
                <svg
                  width="11"
                  height="240"
                  viewBox="0 0 11 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.34 0V112L1.34 122L9.34 130V239.5"
                    stroke="#EC9B4B"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="text">
                <p>
                  <em>
                    Words can hardly describe the incredible time I had at the
                    Repa Retreat. I can warmly recommend this magical place to
                    anyone seeking peace and renewal.
                  </em>
                </p>
                <p>
                  <em>
                    The campus is enchanting, and the entire program is designed
                    with so much thought and love, down to the smallest details.
                    The teachers and staff are truly wonderful people who create
                    an atmosphere of care...
                  </em>
                </p>
              </div>
            </div>

            <div className="reviewer">
              <div className="quote-icon">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.934 18.954C14.352 16.926 18.174 12.168 18.174 9.828C18.174 8.814 17.55 8.034 15.6 7.488C14.43 7.254 13.26 6.084 13.26 4.29C13.26 1.872 15.054 0 17.394 0C19.812 0 21.84 1.716 21.84 4.992C21.84 7.644 21.684 12.558 12.48 19.578L11.934 18.954ZM0 18.954C2.418 16.926 6.24 12.168 6.24 9.828C6.24 8.814 5.616 8.034 3.666 7.488C2.496 7.254 1.326 6.084 1.326 4.29C1.326 1.872 3.12 0 5.46 0C7.878 0 9.906 1.716 9.906 4.992C9.906 7.644 9.75 12.558 0.546 19.578L0 18.954Z"
                    fill="#EC9B4B"
                  />
                </svg>
              </div>

              <div className="author">
                <h4>Claire Thompson</h4>
                <a href="#">
                  <span className="bar"></span>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming">
        <hr className="upcoming__rule" />
        <div className="upcoming__header">
          <h2>Upcoming</h2>
          <span>Programs</span>
        </div>

        <div className="upcoming__body">
          <div className="upcoming__image">
            <img src={img14} alt="Upcoming program" />
          </div>

          <div className="upcoming__list">
            {UPCOMING_PROGRAMS.map((item, index) => (
              <div className="upcoming__item" key={`${item.title}-${index}`}>
                <h3>{item.title}</h3>
                <p className="upcoming__date">{item.date}</p>
                <button className="upcoming__cta" type="button">
                  <span className="upcoming__cta-icon" aria-hidden="true">
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.292969 0.292847C0.683493 -0.0976776 1.31651 -0.0976776 1.70703 0.292847L6.90332 5.48914C7.14568 5.73163 7.23633 6.06738 7.17773 6.38074C7.23679 6.69439 7.14594 7.03056 6.90332 7.27332L1.70703 12.4696C1.31653 12.86 0.683468 12.86 0.292969 12.4696C-0.0974204 12.0791 -0.0974211 11.446 0.292969 11.0555L4.9668 6.38074L0.292969 1.70691C-0.0975555 1.31638 -0.0975555 0.683371 0.292969 0.292847Z"
                        fill="#A66D35"
                      />
                    </svg>
                  </span>
                  <span>View Form</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="program-participation">
        <img
          className="program-participation__bg"
          src={img15}
          alt="Program Participation background"
        />
        <div className="program-participation__card">
          <div className="program-participation__content">
            <div className="program-participation__title">
              <h2>Program</h2>
              <span>Participation</span>
              <p className="program-participation__text">
                The Repa Program is committed to guiding individuals through a
                profound spiritual journey with a blend of virtual and in-person
                experiences. We invite you to join us in this transformative
                path of growth and enlightenment.
              </p>
              {/* <button type="button" className="program-participation__cta">
                <span
                  className="program-participation__cta-icon"
                  aria-hidden="true"
                >
                </span>
                Join Repa Retreat
              </button> */}
              <button
            type="button"
            className="program-participation__cta"
            aria-label="Join Now"
          >
            <span className="program-participation__cta-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.9912 6.01009L5.39919 10.5631L9.59419 12.9911L13.2932 9.29109C13.4808 9.10358 13.7353 8.99829 14.0005 8.99839C14.2658 8.99848 14.5202 9.10395 14.7077 9.29159C14.8952 9.47923 15.0005 9.73367 15.0004 9.99894C15.0003 10.2642 14.8948 10.5186 14.7072 10.7061L11.0072 14.4061L13.4372 18.6001L17.9912 6.01009ZM18.3142 3.76609C19.5092 3.33309 20.6672 4.49109 20.2342 5.68609L14.9522 20.2911C14.5182 21.4891 12.8822 21.6351 12.2432 20.5321L9.02619 14.9741L3.46819 11.7571C2.36519 11.1181 2.51119 9.48209 3.70919 9.04809L18.3142 3.76609Z" fill="rgba(59, 39, 19, 1)" />
              </svg>

            </span>
            <p className="program-participation__join-text">Join Repa Retreat</p>
          </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const GoogleGLogo = ({ size = 98 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 98 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect x="18" y="16" width="62" height="62" rx="31" fill="white" />
      <mask
        id="mask0"
        maskUnits="userSpaceOnUse"
        x="27"
        y="25"
        width="43"
        height="44"
      >
        <path
          d="M69.5 43H49V51.5H60.8C59.7 56.9 55.1 60 49 60C41.8 60 36 54.2 36 47C36 39.8 41.8 34 49 34C52.1 34 54.9 35.1 57.1 36.9L63.5 30.5C59.6 27.1 54.6 25 49 25C36.8 25 27 34.8 27 47C27 59.2 36.8 69 49 69C60 69 70 61 70 47C70 45.7 69.8 44.3 69.5 43Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <path d="M25 60V34L42 47L25 60Z" fill="#FBBC05" />
      </g>
      <mask
        id="mask1"
        maskUnits="userSpaceOnUse"
        x="27"
        y="25"
        width="43"
        height="44"
      >
        <path
          d="M69.5 43H49V51.5H60.8C59.7 56.9 55.1 60 49 60C41.8 60 36 54.2 36 47C36 39.8 41.8 34 49 34C52.1 34 54.9 35.1 57.1 36.9L63.5 30.5C59.6 27.1 54.6 25 49 25C36.8 25 27 34.8 27 47C27 59.2 36.8 69 49 69C60 69 70 61 70 47C70 45.7 69.8 44.3 69.5 43Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1)">
        <path d="M25 34L42 47L49 40.9L73 37V23H25V34Z" fill="#EA4335" />
      </g>
      <mask
        id="mask2"
        maskUnits="userSpaceOnUse"
        x="27"
        y="25"
        width="43"
        height="44"
      >
        <path
          d="M69.5 43H49V51.5H60.8C59.7 56.9 55.1 60 49 60C41.8 60 36 54.2 36 47C36 39.8 41.8 34 49 34C52.1 34 54.9 35.1 57.1 36.9L63.5 30.5C59.6 27.1 54.6 25 49 25C36.8 25 27 34.8 27 47C27 59.2 36.8 69 49 69C60 69 70 61 70 47C70 45.7 69.8 44.3 69.5 43Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2)">
        <path d="M25 60L55 37L62.9 38L73 23V71H25V60Z" fill="#34A853" />
      </g>
      <mask
        id="mask3"
        maskUnits="userSpaceOnUse"
        x="27"
        y="25"
        width="43"
        height="44"
      >
        <path
          d="M69.5 43H49V51.5H60.8C59.7 56.9 55.1 60 49 60C41.8 60 36 54.2 36 47C36 39.8 41.8 34 49 34C52.1 34 54.9 35.1 57.1 36.9L63.5 30.5C59.6 27.1 54.6 25 49 25C36.8 25 27 34.8 27 47C27 59.2 36.8 69 49 69C60 69 70 61 70 47C70 45.7 69.8 44.3 69.5 43Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3)">
        <path d="M73 71L42 47L38 44L73 34V71Z" fill="#4285F4" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="98"
        height="98"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="9" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Home;
