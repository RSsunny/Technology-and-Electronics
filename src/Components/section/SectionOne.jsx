import AOS from "aos";
import "aos/dist/aos.css";

const SectionOne = () => {
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
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-5xl font-rancho text-center">Our Service</h1>
      <p className="text-center md:w-[600px] px-3 mx-auto my-2">
        The AI-driven features, such as Night Sight and Super Res Zoom, enhance
        low-light photography and zoomed-in shots, ensuring impressive results.{" "}
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 px-5 lg:px-0">
        <div>
          <h1
            className="text-3xl lg:text-5xl font-rancho mb-5"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="400"
          >
            We have fast delivery system
          </h1>
          <p
            className="md:w-[500px]"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="600"
          >
            Enjoy fast and reliable delivery options when you order the Intel
            Core TV Processor. We offer nationwide shipping, ensuring that your
            product reaches your doorstep in a timely manner. You can track your
            delivery in real-time,
          </p>
          <button
            className="px-4 py-2 bg-[#FF4512] text-white my-3 rounded-full hover:bg-[#d93407] text-2xl font-rancho duration-700 ease-linear"
            data-aos="fade-right"
            data-aos-mirror="true"
            data-aos-delay="800"
          >
            Order Now
          </button>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://i.ibb.co/FVWYFBZ/Fast-delivery-package-by-scooter-illustration-PNG.png"
            alt=""
            data-aos="fade-left"
            data-aos-mirror="true"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

// https://i.ibb.co/5k0s34g/Fast-delivery-by-scooter-concept-transparent-PNG.png
