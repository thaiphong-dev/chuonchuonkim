import React, { useState } from "react";
import SideBarMenu from "./SidebarMenu";

const MainMenu = () => {
  const listMenu = [
    {
      label: "Trang chủ",
      link: "/#",
    },
    {
      label: "Chuyện nhà Chuồn Chuồn Kim",
      link: "/#",
    },
    {
      label: "Giữ chỗ cho bữa cơm nhà",
      link: "/#",
    },
    {
      label: "Mâm cơm hôm nay",
      link: "/#",
    },
    {
      label: "Lời thương từ khách quý",
      link: "/#",
    },
    {
      label: "Mùi quê trong gian bếp",
      link: "/#",
    },
    {
      label: "Đường về nhà",
      link: "/#",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#2a1d10] text-white max-h-[99px] flex justify-center items-center ">
      {/* Menu on PC */}
      <div className="max-w-[1240px] w-full h-full  justify-between p-[10px] text-[15px] leading-4 hidden lg:flex">
        <div className="w-[200px]">
          <img
            className="w-full max-h-[99px]"
            src="/images/logos/logo.png"
            alt="logo"
          />
        </div>

        <div className="flex justify-end flex-wrap w-[70%] space-x-[10px] items-center">
          {listMenu.map((item, index) => (
            <a
              className="py-[10px] hover:text-[#F3E385]"
              key={index}
              href={item.link}
            >
              {item.label}
            </a>
          ))}
          <a
            className=" py-[10px] px-[5px] border-[1px] border-white rounded-[10px] hover:bg-[#F3E385] hover:text-black  transition-all duration-300"
            href={"/#"}
          >
            Hotline: 01230 213 213
          </a>
        </div>
      </div>
      {/* Menu on MO */}
      <div className="w-full h-full flex justify-between items-center p-[10px] text-[15px] leading-4">
        <div onClick={() => setIsOpen(true)}>
          <img
            className="w-[20px] aspect-square"
            src="/images/icons/menu.svg"
            alt="menu"
          />
        </div>
        <div className="w-[200px]">
          <img
            className="w-full max-h-[99px]"
            src="/images/logos/logo.png"
            alt="logo"
          />
        </div>
        <div>
          <img
            className="w-[20px] aspect-square"
            src="/images/icons/search.svg"
            alt="search"
          />
        </div>
      </div>
      <SideBarMenu isOpen={isOpen} handleCloseMenu={handleCloseMenu} />
    </div>
  );
};

export default MainMenu;
