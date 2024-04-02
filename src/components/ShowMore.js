import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function ReadMore({ text, moreText, moreText2, moreText3 }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-start">
        <p className="flex justify-items-start font-semibold text-white mx-auto text-left pl-8 py-3 md:pl-12 lg:pl-11 xl:pl-16 2xl:pl-0 text-2xl lg:text-3xl">{text}</p>
        <button
          className="flex justify-center w-6 py-3 text-lg text-white rounded-lg font-semibold"
          onClick={toggleReadMoreLess}
        >
          {isShowMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {isShowMore && <p className="w-10/12 lg:w-11/12 mx-auto text-left text-white py-3 text-xl lg:text-2xl">{moreText}</p>}
      {isShowMore && <p className="w-10/12 lg:w-11/12 mx-auto text-left text-white py-3 text-xl lg:text-2xl">{moreText2}</p>}
      {isShowMore && <p className="w-10/12 lg:w-11/12 mx-auto text-left text-white py-3 text-xl lg:text-2xl">{moreText3}</p>}
    </div>
  );
}

export default ReadMore;