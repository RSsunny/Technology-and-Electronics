const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const types = form.types.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const driscription = form.driscription.value;
    const product = {
      name,
      brandName,
      types,
      rating,
      price,
      photo,
      driscription,
    };
    console.log(product);
    fetch(
      `https://technology-and-electronics-server-site.vercel.app/${brandName}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="flex justify-center items-center my-20">
      <form onSubmit={handleAdd} className="flex flex-col gap-3 border p-10">
        <h1 className="text-4xl font-rancho text-[#FF4512] text-center mb-5">
          Add Product
        </h1>
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <label htmlFor="name">
            <h1 className=" font-semibold">Name :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="name"
              id="1001"
              required
            />
          </label>
          <label htmlFor="brandName">
            <h1 className=" font-semibold">Brand Name:</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="brandName"
              id="1002"
              required
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <label htmlFor="types">
            <h1 className=" font-semibold">Type :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="types"
              id="1003"
              required
            />
          </label>
          <label htmlFor="price">
            <h1 className=" font-semibold">Price:</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="price"
              id="1004"
              required
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <label htmlFor="photo">
            <h1 className=" font-semibold">Photo :</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="photo"
              id="1005"
              required
            />
          </label>
          <label htmlFor="rating">
            <h1 className=" font-semibold">Rating:</h1>
            <input
              className="outline-none border p-2 text-[#FF4512] md:w-[400px] my-3"
              type="text"
              name="rating"
              id="1006"
              required
            />
          </label>
        </div>
        <label htmlFor="discription">
          <h1 className=" font-semibold">Discription:</h1>
          <input
            className="outline-none border p-2 text-[#FF4512] w-full my-3"
            type="text"
            name="driscription"
            id="1007"
            required
          />
        </label>

        <div className="mt-5">
          <input
            className="w-full p-2 bg-[#FF4512] hover:bg-opacity-90 text-white font-rancho text-2xl"
            type="submit"
            value="Add product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

// https://i.ibb.co/9ZPsvW3/google-Tablet.jpg
// https://i.ibb.co/VYL3r04/googlephone1.jpg
// https://i.ibb.co/djGdhz6/googlewatch.jpg
// https://i.ibb.co/m4nByrC/google-Laptop.jpg
