const SectionTwo = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="bg-center bg-cover h-[600px] md:h-[400px]  "
        style={{
          backgroundImage: `url("https://i.ibb.co/DrdHThj/applebanner2.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-white px-2 md:px-0">
          <h1 className="text-5xl font-rancho mb-5">Apple iPhone 15 Pro</h1>
          <p className="md:w-[600px] mx-auto border rounded-full md:rounded-none text-center filter px-5 ">
            The latest iPhone from Apple with advanced features.
          </p>
          <p className="md:w-[650px] mx-auto mt-5">
            To get the most accurate and up-to-date information about Apples
            product offerings, I recommend visiting Apples official website or
            checking the latest news from reliable sources. You can also visit
            an Apple retail store or authorized reseller for information on
            their latest products.
          </p>
          <button className="px-6 py-2 border rounded-full text-3xl font-rancho mt-5">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
