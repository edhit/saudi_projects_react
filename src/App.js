import React from "react";

const menuItems = [
  {
    title: "Life in Madinah / Жизнь в Медине 🇸🇦",
    icon: process.env.PUBLIC_URL + "/img/medina.jpg",
    link: "https://t.me/live_in_madina",
  },
  {
    title: "Обмен валюты в Саудии",
    icon: "https://img.icons8.com/ios/50/000000/wifi.png",
    link: "/wifi",
  },
  {
    title: "Поездки по Саудии",
    icon: "https://img.icons8.com/ios/50/000000/bluetooth.png",
    link: "/bluetooth",
  },
];

const SettingsMenu = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto py-6">
        {menuItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4 hover:bg-gray-50 transition duration-200"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-8 h-8 rounded-full mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
