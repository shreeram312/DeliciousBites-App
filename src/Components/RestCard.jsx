import veg from "../assets/veg.png";
import nonveg from "../assets/nonveg.png";

export const RestCard = ({ id, data, cart, setcart }) => {
  console.log(cart);
  return (
    <div className="m-6">
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src="https://media.istockphoto.com/id/1488738060/photo/south-indian-veg-thali.webp?b=1&s=170667a&w=0&k=20&c=gm_9MP4A3xZwuVI_Dzd7kkfHLSZ_HJZFiKrZS-Hg4S8="
            alt="card-image"
          />
        </div>
        <div className="p-6 ">
          <div className="flex justify-end h-10">
            {data.vegetarian ? <img src={veg} /> : <img src={nonveg} />}
          </div>
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {data.title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {data.description}
          </p>
        </div>
        <div className="p-6 pt-0  rounded-md">
          <button
            onClick={() => {
              setcart((prevCart) => {
                return { ...prevCart, [id]: (prevCart[id] || 0) - 1 };
              });
            }}
            className=" mx-4 border-2 border-black  font-bold text-3xl rounded-full px-3"
          >
            -
          </button>
          <span className="px-2  font-bold text-3xl">{cart[id] || 0}</span>
          <button
            onClick={() => {
              setcart((prevCart) => {
                return { ...prevCart, [id]: (prevCart[id] || 0) + 1 };
              });
            }}
            className=" mx-4 border-2 border-black  font-bold text-3xl rounded-full px-2"
          >
            +
          </button>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
