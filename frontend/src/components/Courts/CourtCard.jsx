import React from "react";
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const CourtCard = ({ court }) => {
  const {
    name,
    location,
    type,
    avgRating,
    totalRating,
    photo,
    owner,
    totalBooking,
  } = court;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] nt-3 lg:nt-5">
        {name}
      </h2>
      <div className="nt-2 lg:nt-4 flex items-centre justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {owner}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalBooking} booking
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {location}
          </p>
        </div>

        <Link
          to="/courts"
          className="w-[44px] h-[44px] rounded-full border border-gray-300 mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-600 hover:border-none transition"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5 text-gray-700 transition" />
        </Link>
      </div>
    </div>
  );
};

export default CourtCard;
