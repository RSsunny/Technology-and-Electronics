import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
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
            className="bg-center bg-cover h-[300px] md:h-[500px] overflow-hidden"
            style={{
              backgroundImage: `url("https://i.ibb.co/vkskSTL/banner37.png")`,
            }}
          >
            <div className="absolute left-10 md:left-20 lg:left-36 top-16  md:top-40 md:text-white">
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
                data-aos="fade-right"
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
                data-aos="fade-right"
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
            className="bg-center bg-cover h-[300px] md:h-[500px]  "
            style={{
              backgroundImage: `url("https://i.ibb.co/2FyBstB/banner8.jpg")`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[300px] md:h-[500px]  "
            style={{
              backgroundImage: `url("https://i.ibb.co/zND55ct/banner33.png")`,
            }}
          >
            <h1>hello</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-center bg-cover h-[300px] md:h-[500px]  relative"
            style={{
              backgroundImage: `url("https://i.ibb.co/pdW5ssS/banner1.jpg")`,
            }}
          >
            <div className="absolute left-20 lg:left-32 top-52 hidden md:block">
              <span className="font-rancho text-7xl font-bold text-[#ff0000f5] ">
                30%
              </span>
              <h1 className="text-3xl font-rancho">Discount</h1>
            </div>
            <div className="absolute md:right-20 top-10 md:top-40 md:text-right">
              <h1 className="text-6xl text-center md:text-right font-rancho md:pr-10">
                AirPods
              </h1>
              <p className="md:w-[300px] px-10">
                Say “Hey Siri” to do things like play a song, make a call, or
                get directions.Double-tap to play, skip forward, or answer a
                phone call
              </p>
              <div className="text-center md:text-right md:pr-10">
                <button className="px-3 md:px-6 md:py-2 border my-2 md:my-5 border-[#FF4512] font-rancho text-[#ff0000f5] text-2xl filter ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
// https://i.ibb.co/pdW5ssS/banner1.jpg
// https://i.ibb.co/2FyBstB/banner8.jpg
// https://i.ibb.co/my7RPVC/banner2.jpg
// https://i.ibb.co/25c10Zn/banner4.jpg
// https://i.ibb.co/C5nhFcq/banner5.jpg
// https://i.ibb.co/vvbyyG9/banner6.jpg

// https://i.ibb.co/8BfsNLC/banner32.png
// https://i.ibb.co/zND55ct/banner33.png
// https://i.ibb.co/LPdT5zx/banner30.png
// https://i.ibb.co/kX9DWyV/banner31.png
