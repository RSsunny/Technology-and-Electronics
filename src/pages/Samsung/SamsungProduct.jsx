import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SamsungProduct = () => {
  const data = useLoaderData();
  const id = useParams();

  const matchProdect = data?.find((datas) => datas._id == id.id);
  console.log(matchProdect);
  const { brandName, driscription, name, price, types, rating, photo } =
    matchProdect;

  const handleaddcart = () => {
    fetch(`https://technology-and-electronics-server-site.vercel.app/mycart`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(matchProdect),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product add complete",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex gap-10 px-5 lg:px-0">
        <div className="w-[600px] h-[500px]">
          <img className="h-full w-full" src={photo} alt="" />
        </div>
        <div>
          <h1 className="text-5xl">{name}</h1>
          <h2 className="text-xl my-3">{driscription}</h2>
          <ul className="flex space-y-4 flex-col mt-10 text-xl">
            <li>Brand: {brandName}</li>

            <li className="">Price: {price}</li>
            <li>Category: {types}</li>
            <li> Rating {rating}</li>
          </ul>
          <button
            onClick={handleaddcart}
            className="px-4 py-2 border inline-block mt-10 border-[#FF4512] font-rancho text-3xl hover:bg-[#FF4512] duration-500 ease-out hover:text-white"
          >
            Add to Curt
          </button>
        </div>
      </div>

      <div className="my-20 px-5 lg:px-0">
        <p>
          The Google Pixel 7a is a remarkable addition to acclaimed lineup of
          smartphones. Building upon the success of its predecessors, this phone
          sets a new standard for Android devices. With a focus on design,
          performance, and photography, the Pixel 7a offers a comprehensive
          package for tech enthusiasts and everyday users alike.
        </p>
        <h1 className="text-xl font-bold my-5">Design and Display</h1>

        <p>
          The phone boasts a sleek and modern design, featuring a high-quality
          build that exudes sophistication. Its compact size and lightweight
          construction make it comfortable to hold and use with one hand. The
          Pixel 7a features a stunning OLED display, offering vivid colors and
          deep blacks, enhancing the overall viewing experience. The
          responsiveness and sharpness are ideal for gaming, streaming, and
          browsing.
        </p>
        <h1 className="text-xl font-bold my-5">Performance and Speed</h1>
        <p>
          Under the hood, the Pixel 7a is powered by Google custom-designed
          processor, ensuring snappy and efficient performance. Multitasking and
          app switching are seamless, while demanding tasks like gaming and
          video editing run smoothly. The phone 5G capabilities provide
          lightning-fast internet speeds, facilitating smooth streaming and
          rapid downloads.
        </p>
        <h1 className="text-xl font-bold my-5">Camera Capabilities</h1>
        <p>
          The Pixel 7a continues legacy of exceptional camera technology. Its
          advanced camera system captures stunning photos in various lighting
          conditions. The AI-driven features, such as Night Sight and Super Res
          Zoom, enhance low-light photography and zoomed-in shots, ensuring
          impressive results. The front-facing camera is equally capable,
          perfect for high-quality selfies and video calls.
        </p>
        <h1 className="text-xl font-bold">Software Experience</h1>
        <p>
          Google commitment to software updates and a clean Android experience
          shines through on the Pixel 7a. Users can expect timely security
          updates and the latest Android features. The phone integration with
          Google services, including Google Assistant and Google Photos,
          enhances productivity and convenience.
        </p>
        <h1 className="text-xl font-bold my-5">
          Battery Life and Sustainability
        </h1>
        <p>
          The Pixel 7a offers impressive battery life, easily lasting a full day
          on a single charge. Adaptive battery management optimizes power
          consumption, ensuring longevity. Google commitment to sustainability
          is evident with the phone eco-friendly design and packaging.
        </p>
      </div>
    </div>
  );
};

export default SamsungProduct;
