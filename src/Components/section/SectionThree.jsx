import AOS from "aos";
import "aos/dist/aos.css";

const SectionThree = () => {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    debounceDelay: 50,
    throttleDelay: 99,
    delay: 100,
    duration: 1000,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 items-center max-w-7xl mx-auto overflow-hidden">
      <div className="md:flex-1 md:ml-10 overflow-hidden px-2 md:px-0">
        <h1
          className="text-5xl md:text-9xl font-rancho my-5"
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-delay="400"
        >
          Oppo F21 Pro{" "}
        </h1>
        <h1
          className="text-2xl font-bold"
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-delay="600"
        >
          Mega Lens, Mega Portrait
        </h1>
        <h1
          className="text-3xl font-bold"
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-delay="800"
        >
          TURN LIGHTS INTO MAGIC
        </h1>
        <p
          className=" mt-2"
          data-aos="fade-right"
          data-aos-mirror="true"
          data-aos-delay="800"
        >
          Get Beautiful Bokeh Flare Portrait through our powerful AI algorithms
          that turn background lights into stunning, colour-filled spots of
          lights. All the drama of a DSLR, with the focus on your fave faces.
        </p>
      </div>
      <div className="flex-1 h-[600px]  relative overflow-hidden">
        <img
          className="h-full  md:absolute right-0"
          src="https://i.ibb.co/tPRtptq/Male-hand-holding-the-black-smartphone-with-blank-screen-royalty-free-on-transparent-PNG.png"
          alt=""
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-delay="400"
        />
        <div className="w-[200px] absolute top-10 md:top-32 left-20 md:left-28 lg:left-56 overflow-hidden">
          <p
            className="text-5xl md:text-6xl font-rancho mt-5 text-[#FF4512]"
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-delay="600"
          >
            30%
          </p>
          <p
            className="text-xl font-bold"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="700"
          >
            Discount
          </p>
          <p
            className="text-xs w-[100px] md:w-[150px] my-2 md:my-5 "
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-delay="800"
          >
            AI Palettes² lets you copy any filter or lighting from any image and
            apply it to your pics.
          </p>
          <h1
            className="text-xl md:text-4xl font-rancho border inline-block p-1 md:p-2 rounded-full border-[#FF4512]"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="900"
          >
            Order Now
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
