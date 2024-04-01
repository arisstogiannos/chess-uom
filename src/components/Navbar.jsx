"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar({ spline, setPage, page }) {
  function triggerAnimation() {
    spline.current.emitEvent("mouseHover", "Parent");
  }
  function triggerAnimation2(i) {
    i === 2
      ? spline.current.emitEvent("keyUp", "Parent")
      : spline.current.emitEvent("keyDown", "Parent");
    i === 2
      ? spline.current.emitEvent("keyUp", "Spot Light")
      : spline.current.emitEvent("keyDown", "Spot Light");

    setPage(i);
    console.log(i);
  }

  const links = [
    { title: "Αρχική", href: 0 },
    { title: "Διάφορα", href: 1 },
    { title: "Επικοινωνία", href: 2 },
  ];
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <nav className="myContainer  h-28  flex items-center justify-between z-50 mb-16 ">
      <div className="flex gap-24 items-center">
        {Logo()}
        <ul className="text-myWhite flex gap-14">
          {links.map((item, i) => {
            return (
              <li key={i}>
                <button
                  className={`${page === i ? "text-myOrange" : "text-myWhite"}`}
                  onClick={() => triggerAnimation2(item.href)}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <button
        onClick={triggerAnimation}
        className="w-36 h-12 font-medium text-base bg-myOrange rounded-full flex items-center justify-around"
      >
        Εγγραφή{SignIcon()}
      </button> */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFtWLveO4_6LdXzL_iG_raS6xhytFxM5TTeVwsYbvGS3g4ww/viewform?vc=0&c=0&w=1&flr=0"
        target="_blank"
        className="btn learn-more"
      >
        <span aria-hidden="true" className="circle">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text tracking-wide">Εγγραφη</span>
      </a>
    </nav>
  );
}

function Logo() {
  return (
    <svg
      width="149"
      height="41"
      viewBox="0 0 149 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4628 37.5326C10.6692 37.5326 8.26635 36.9407 6.25404 35.757C4.25357 34.5615 2.71474 32.9043 1.63756 30.7854C0.572217 28.6666 0.0395508 26.2281 0.0395508 23.4701C0.0395508 20.6765 0.578137 18.2262 1.65532 16.1192C2.74434 14.0004 4.28908 12.3491 6.28955 11.1654C8.29003 9.9698 10.6692 9.37203 13.4273 9.37203C15.8066 9.37203 17.8899 9.80408 19.6773 10.6682C21.4647 11.5323 22.8792 12.7456 23.9209 14.3081C24.9626 15.8706 25.5367 17.7054 25.6432 19.8124H18.5054C18.3042 18.4511 17.7715 17.3562 16.9074 16.5276C16.0551 15.6872 14.9365 15.2669 13.5516 15.2669C12.3797 15.2669 11.3558 15.5865 10.4799 16.2258C9.61574 16.8531 8.94107 17.7705 8.45575 18.9779C7.97043 20.1853 7.72776 21.6472 7.72776 23.3635C7.72776 25.1036 7.96451 26.5832 8.43799 27.8025C8.92331 29.0217 9.60394 29.9509 10.4799 30.5901C11.3558 31.2293 12.3797 31.5489 13.5516 31.5489C14.4157 31.5489 15.191 31.3713 15.8776 31.0162C16.576 30.6611 17.1501 30.1462 17.5999 29.4715C18.0615 28.7849 18.3634 27.9623 18.5054 27.0035H25.6432C25.5248 29.0868 24.9567 30.9215 23.9387 32.5077C22.9325 34.082 21.5416 35.3131 19.7661 36.2009C17.9905 37.0887 15.8894 37.5326 13.4628 37.5326ZM38.05 21.2329V36.9999H30.4861V0.63623H37.8369V14.539H38.1565C38.7721 12.9291 39.7664 11.6685 41.1395 10.757C42.5126 9.83368 44.2349 9.37203 46.3064 9.37203C48.2003 9.37203 49.8516 9.78633 51.2602 10.615C52.6807 11.4317 53.7815 12.6095 54.5628 14.1483C55.3559 15.6753 55.7465 17.5042 55.7346 19.6348V36.9999H48.1707V20.9843C48.1826 19.3034 47.7564 17.9954 46.8923 17.0603C46.04 16.1251 44.8445 15.6576 43.3057 15.6576C42.2758 15.6576 41.3644 15.8766 40.5713 16.3145C39.79 16.7525 39.1745 17.3917 38.7247 18.2321C38.2867 19.0607 38.0618 20.061 38.05 21.2329ZM74.1162 37.5326C71.3108 37.5326 68.896 36.9644 66.8719 35.828C64.8596 34.6798 63.3089 33.0581 62.2199 30.963C61.1309 28.856 60.5864 26.3642 60.5864 23.4878C60.5864 20.6824 61.1309 18.2203 62.2199 16.1015C63.3089 13.9826 64.8418 12.3313 66.8186 11.1476C68.8073 9.96388 71.1392 9.37203 73.8144 9.37203C75.6136 9.37203 77.2886 9.66204 78.8392 10.2421C80.4017 10.8103 81.763 11.6685 82.923 12.8167C84.0949 13.9649 85.0064 15.409 85.6574 17.149C86.3085 18.8773 86.634 20.9014 86.634 23.2215V25.2989H63.6049V20.6114H79.5139C79.5139 19.5224 79.2772 18.5577 78.8037 17.7172C78.3302 16.8768 77.6733 16.2198 76.8328 15.7463C76.0042 15.261 75.0395 15.0184 73.9387 15.0184C72.7905 15.0184 71.7725 15.2847 70.8847 15.8174C70.0087 16.3382 69.3222 17.0425 68.825 17.9303C68.3279 18.8062 68.0734 19.7828 68.0615 20.86V25.3167C68.0615 26.6661 68.3101 27.832 68.8073 28.8145C69.3163 29.797 70.0324 30.5546 70.9557 31.0873C71.879 31.6199 72.9739 31.8863 74.2405 31.8863C75.0809 31.8863 75.8504 31.7679 76.5487 31.5311C77.2471 31.2944 77.8449 30.9393 78.3421 30.4658C78.8392 29.9923 79.218 29.4123 79.4784 28.7258L86.4742 29.1874C86.1191 30.8683 85.3911 32.3361 84.2902 33.5908C83.2012 34.8337 81.7926 35.8044 80.0644 36.5027C78.348 37.1893 76.3653 37.5326 74.1162 37.5326ZM114.262 17.5042L107.337 17.9303C107.219 17.3384 106.964 16.8058 106.574 16.3323C106.183 15.847 105.668 15.4623 105.029 15.1782C104.402 14.8822 103.65 14.7343 102.774 14.7343C101.602 14.7343 100.614 14.9829 99.8089 15.48C99.0038 15.9653 98.6013 16.6164 98.6013 17.4331C98.6013 18.0842 98.8617 18.6346 99.3829 19.0844C99.9029 19.5342 100.797 19.8953 102.064 20.1675L107 21.1618C109.651 21.7063 111.628 22.5823 112.93 23.7897C114.232 24.9971 114.883 26.5832 114.883 28.5482C114.883 30.3356 114.357 31.904 113.303 33.2535C112.261 34.6029 110.829 35.6564 109.006 36.414C107.195 37.1597 105.106 37.5326 102.738 37.5326C99.1279 37.5326 96.2516 36.7809 94.1091 35.2776C91.9784 33.7624 90.7296 31.7028 90.3627 29.0986L97.8023 28.708C98.0272 29.8088 98.5717 30.6493 99.4359 31.2293C100.3 31.7975 101.407 32.0816 102.756 32.0816C104.082 32.0816 105.147 31.8271 105.952 31.3181C106.769 30.7972 107.183 30.1285 107.195 29.3117C107.183 28.6251 106.893 28.0629 106.325 27.6249C105.757 27.1751 104.881 26.8318 103.697 26.5951L98.9742 25.654C96.3108 25.1213 94.3281 24.1981 93.026 22.8841C91.7358 21.5702 91.0907 19.8953 91.0907 17.8593C91.0907 16.1074 91.5641 14.5981 92.5111 13.3316C93.4699 12.065 94.8134 11.0884 96.5416 10.4019C98.2817 9.71531 100.318 9.37203 102.65 9.37203C106.094 9.37203 108.805 10.1 110.782 11.556C112.77 13.012 113.93 14.9947 114.262 17.5042Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.461 8.04522C114.898 8.97129 119.799 23.2587 121.446 26.4863C122.461 26.1799 123.217 25.9006 123.973 25.6214C121.342 20.4968 119.673 12.0711 129.585 9.23226C129.803 8.80944 129.761 8.41376 129.461 8.04522Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55 39V39.25C55 39.75 55.7719 40.5 56.5439 41H142.228C143 40.5 143 39.75 143 39.25V39H55Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.24 18.5321C141.198 17.7365 134.429 9.38169 139.896 12.5645C138.334 9.58061 135.991 9.18277 133.908 8.98384C133.908 8.586 135.731 7.59138 135.991 6C134.429 6.39785 131.825 6.99461 130.263 8.18815C130.524 8.78492 130.784 9.77954 130.263 9.97846C121.672 11.7688 121.615 19.106 126 23.573C127.5 25.1011 131.74 27.6022 132 28C134 29.5 133.5 31.5 132.5 32C131.814 32.3428 128.5 33.8876 126 32.7416C123.5 31.5955 122.5 30.8315 121 31.2135C121 31.2135 119.438 31.7185 119 32.7416C118.575 33.7328 119.262 35.2338 120 35.7978C120.69 36.3252 122.062 37.1193 123 37.3258C126.356 38.0648 128.357 38.1273 130.263 38.0899C134.269 38.0113 136.5 36.5618 136.5 36.5618C136.5 36.5618 138.57 35.2169 139.5 34.2697C141 32.7416 141.5 30.5 141.5 30.5C143 25 127.92 18.1343 131.305 15.3494C129.743 16.7418 132.606 19.5268 134.95 19.1289C135.991 19.9246 137.293 20.3225 138.855 21.3171C138.595 21.9138 141.458 23.3063 141.979 22.7095C141.719 22.3117 141.719 22.5106 141.719 22.3117C141.979 22.3117 142.24 22.7095 142.5 22.7095C144.322 20.9192 143.541 19.5268 142.24 18.5321ZM136.772 14.3548C136.772 14.3548 137.032 13.1612 135.991 12.7634C134.95 12.3655 134.429 12.5645 134.429 12.5645C134.429 12.5645 133.908 13.3601 136.772 14.3548Z"
        fill="white"
      />
    </svg>
  );
}

function SignIcon() {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 27.0002C21.4037 27.0002 27.0001 21.4038 27.0001 14.5001C27.0001 7.59649 21.4037 2 14.5 2"
        stroke="black"
        stroke-width="2.34377"
        stroke-linecap="round"
      />
      <path
        d="M2 14.5H17.6252M17.6252 14.5L12.9376 9.8125M17.6252 14.5L12.9376 19.1876"
        stroke="black"
        stroke-width="2.34377"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Navbar;
