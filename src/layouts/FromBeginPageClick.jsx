import React, { useState, useEffect } from "react";
import IconBeginningPage from "@/components/icons/IconBeginningPage";

const FromBeginPageClick = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if user scrolled past certain threshold (e.g., 100px)
      if (window.scrollY > 300) {
        // Show back-to-top button
        setShowButton(true);
      } else {
        // Hide back-to-top button
        setShowButton(false);
      }
      // console.log(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="">
      <a
        href="#"
        className={`back-top ${showButton ? "visible" : "hidden"}`}
        onClick={handleClick}
      >
        <div className="beginning-page">
          <IconBeginningPage
            className={
              "text-center w-full h-full bg-[#007033] text-white hover:bg-[#fdc97d]"
            }
          ></IconBeginningPage>
        </div>
      </a>
    </div>
  );
};

export default FromBeginPageClick;
