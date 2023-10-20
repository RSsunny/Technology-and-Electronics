import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

const SonySlider = () => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    debounceDelay: 50,
    throttleDelay: 99,
    delay: 500,
    duration: 400,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="max-w-7xl mx-auto md:my-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[300px] md:h-[400px] overflow-hidden"
            style={{
              backgroundImage: `url("https://i.ibb.co/RCQJdPB/sonybanner1.jpg")`,
            }}
          >
            <div className="absolute left-10 md:left-20 top-16  md:top-24 text-white">
              <h1
                className="text-5xl md:text-6xl font-rancho mb-2  md:mb-3  overflow-hidden"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-delay="500"
              >
                Special offer
              </h1>

              <p
                className="text-2xl"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-delay="800"
              >
                up to <span className="text-5xl font-rancho">50% </span>off
              </p>
              <p
                className="font-rancho text-2xl"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-delay="1100"
              >
                only today
              </p>

              <button
                className="px-3 md:px-6 md:py-2 border my-2 md:my-5 border-[#FF4512] font-rancho  text-2xl filter rounded-full"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-delay="1400"
              >
                Buy Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[300px] md:h-[400px]  "
            style={{
              backgroundImage: `url("https://i.ibb.co/z5CKrjh/sonybanner2.jpg")`,
            }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[300px] md:h-[400px]  relative"
            style={{
              backgroundImage: `url("https://i.ibb.co/Tm2xPM3/sonybanner3.jpg")`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SonySlider;
