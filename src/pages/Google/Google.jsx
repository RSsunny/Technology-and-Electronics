import { useLoaderData } from "react-router-dom";
import GoogleSlider from "../../Components/Silder/GoogleSlider";
import GoogleCard from "./GoogleCard";

const Google = () => {
  const googledata = useLoaderData();

  return (
    <div>
      <GoogleSlider></GoogleSlider>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto px-2 lg:px-0 my-10">
        {googledata?.map((data, idx) => (
          <GoogleCard key={idx} categori={data}></GoogleCard>
        ))}
      </div>
    </div>
  );
};

export default Google;
