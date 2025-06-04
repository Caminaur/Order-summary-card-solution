import React from "react";

function Attribution({ theme = "1" }) {
  const linkColorDark = "text-primary-bright-blue";
  const linkColorBright = "text-gray-500";
  const linkColor = theme === "1" ? linkColorDark : linkColorBright;

  const textColorDark = "text-black";
  const textColorLight = "text-white";
  const textColor = theme === "1" ? textColorDark : textColorLight;

  return (
    <div
      className={`text-md absolute bottom-2 text-center max-sm:text-xs ${textColor} transition-colors duration-300`}
    >
      Challenge by{" "}
      <a
        className={`font-bold ${linkColor} hover:opacity-80 transition-colors duration-300`}
        href="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className={`font-bold ${linkColor} hover:opacity-80 transition-colors duration-300`}
        href="https://github.com/Caminaur"
      >
        Julian Caminaur
      </a>
      .
    </div>
  );
}

export default Attribution;
