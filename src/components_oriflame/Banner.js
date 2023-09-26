import { useState, useEffect } from "react";

export default function Banner() {
    const [ banner, closebanner] = useState(false)

  return (
    <div className={banner? "noshow" : "banner"}>
      <div className="cont">
        <span>Enjoy amazing benefits and more with Oriflame</span>
        <button
          onClick={() => {
           closebanner(!banner)
          }}
        >
          <svg
            width="49"
            height="37"
            viewBox="0 0 49 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8.01123"
              width="49"
              height="4"
              rx="1.5"
              transform="rotate(42.0982 8.01123 0)"
              fill="#f5f5f5"
            />
            <rect
              x="6.22681"
              y="34.8887"
              width="49"
              height="4"
              rx="1.5"
              transform="rotate(-45.3915 6.22681 34.8887)"
              fill="#f5f5f5"
            />
          </svg>
        </button>
      </div>
    </div>
  );

}