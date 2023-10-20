import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="bg-center  h-screen w-full flex justify-center text-center items-center px-5 md:px-20">
      <div id="error-page max-w-7xl mx-auto">
        <h1 className="text-5xl font-rancho  my-5">Oops!</h1>
        <p className="text-2xl font-rancho ">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-3xl font-rancho my-3 mb-5">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to={"/"}
          className="bg-[#FF4512] font-rancho text-white md:text-5xl px-6 py-2 rounded-full hover:bg-secondary duration-500 hover:text-white"
        >
          Go back Home Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
