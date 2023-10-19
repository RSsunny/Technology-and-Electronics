import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/Brands/BrandCard";

const Home = () => {
  const brands = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <div className="grid grid-cols-3 justify-between gap-10 max-w-7xl mx-auto px-5 lg:px-0">
        {brands?.map((data, id) => (
          <BrandCard key={id} brand={data}></BrandCard>
        ))}
      </div>
    </>
  );
};

export default Home;
