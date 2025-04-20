import React from "react";
import { Pagination } from "swiper/modules"; // Updated import path
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import userAvatar from "../../assets/images/userAvatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramzy Hafeel",
      rating: 5,
      comment: "Great platform! Booking courts has never been easier and more convenient."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      comment: "The app is so user-friendly. I can book a court in just a few taps!"
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 4,
      comment: "Excellent service. The only reason I'm not giving 5 stars is because I wish there were more courts in my area."
    },
    {
      id: 4,
      name: "Emily Wilson",
      rating: 5,
      comment: "I love how I can see real-time availability. No more guessing if a court is free!"
    },
  ];

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="py-[30px] px-5 rounded-[10px] bg-white shadow-md h-full">
              <div className="flex items-center gap-[13px]">
                <img 
                  src={userAvatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                      <HiStar 
                        key={index} 
                        className={index < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                "{testimonial.comment}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;