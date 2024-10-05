import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";

const Service = () => {
  return (
    <div className="bg-slate-200 p-5 font-mono text-xl md:text-2xl flex flex-col md:flex-row items-center justify-around mx-4 mt-5 rounded-xl">
      {/* Free Shipping */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5 md:mb-0">
        <span>
          <FaTruckFast size={40} />
        </span>
        <div className="text-center md:text-left">
          <h1 className="font-bold">Free Shipping</h1>
          <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {/* Support 24/7 */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-5 md:mb-0">
        <span>
          <RiCustomerService2Fill size={40} />
        </span>
        <div className="text-center md:text-left">
          <h1 className="font-bold">Support 24/7</h1>
          <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      {/* Payment Secure */}
      <div className="flex flex-col md:flex-row items-center gap-3">
        <span>
          <AiOutlineSafety size={40} />
        </span>
        <div className="text-center md:text-left">
          <h1 className="font-bold">Payment Secure</h1>
          <p className="text-lg md:text-xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
