import { Link } from "react-router-dom";
import { ReactComponent as HomeSvg } from "../svgImage/home.svg";
import { ReactComponent as CourseSvg } from "../svgImage/course.svg";
import { ReactComponent as StuSvg } from "../svgImage/student.svg";
import { ReactComponent as PaySvg } from "../svgImage/payment.svg";
import { ReactComponent as RepSvg } from "../svgImage/report.svg";
import { ReactComponent as SetSvg } from "../svgImage/settings.svg";

function Menu() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-24">
        <Link to="/" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex">
            <div className="flex items-center">
              <HomeSvg className="w-6 h-6 mr-2 " />
              <p className="m-0">Home</p>
            </div>
          </button>
        </Link>
        <Link to="/course" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex ">
            <div className="flex items-start">
              <CourseSvg className="w-6 h-6 mr-2 " />
              <p className="m-0">Course</p>
            </div>
          </button>
        </Link>
        <Link to="/student" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex ">
            <div className="flex items-start">
              <StuSvg className="w-6 h-6 mr-2" />
              <p className="m-0">Students</p>
            </div>
          </button>
        </Link>
        <Link to="/payment" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex ">
            <div className="flex items-center">
              <PaySvg className="w-6 h-6 mr-2" />
              <p className="m-0">Payment</p>
            </div>
          </button>
        </Link>
        <Link to="/report" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex ">
            <div className="flex items-center">
              <RepSvg className="w-6 h-6 mr-2" />
              <p className="m-0">Report</p>
            </div>
          </button>
        </Link>
        <Link to="/settings" className="menu-link">
          <button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4 w-32 flex ">
            <div className="flex items-center">
              <SetSvg className="w-6 h-6 mr-2" />
              <p className="m-0">Settings</p>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Menu;
