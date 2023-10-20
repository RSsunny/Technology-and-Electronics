import { NavLink } from "react-router-dom";

const Navlink = () => {
  const linkname = [
    "home",
    "add_product",
    "apple",
    "samsung",
    "sony",
    "intel",
    "google",
    "Acer",
    "dell",
    "panasonic",
    "philips",
    "contact",
  ];

  return (
    <div className="max-w-7xl mx-auto px-1 lg:px-5 border-b py-3 hidden md:flex flex-col md:flex-row gap-1 lg:gap-10 justify-between lg:font-medium capitalize">
      {linkname?.map((data, i) => (
        <NavLink
          to={data === "home" ? "/" : data}
          state={data === "add_product" && `/${data}`}
          key={i}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b border-[#FF4512] text-[#FF4512] font-bold"
              : ""
          }
        >
          {data}
        </NavLink>
      ))}
    </div>
  );
};

export default Navlink;
