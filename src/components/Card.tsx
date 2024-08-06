import { type } from "os";
import React from "react";

type props = {
  text: string;
  url: string;
  img: string;
};

function Card(props: props) {
  const { text, url, img } = props;

  // const isLocalhost = url.includes("localhost");
  return (
    <div
      className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat "
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <img src={img} className="w-[350px] h-[196px] rounded-md" alt="Louvre" />

      <a
        // href={url}
        // target={isLocalhost ? "" : "_blank"}
        rel="noopener noreferrer"
      >
        <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-md bg-yellow-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
          <p className="flex justify-center items-center text-white text-lg font-medium">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
