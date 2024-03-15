import { ReactComponent as CourseSvg } from "../svgImage/course.svg";
import { ReactComponent as StuSvg } from "../svgImage/student.svg";
import { ReactComponent as PaySvg } from "../svgImage/payment.svg";
import { ReactComponent as UsersSvg } from "../svgImage/users.svg";

function HomeScreen() {
  return (
    <div className="main-content">
      <div className="p-10 flex overflow-auto h-screen bg-orange-100">
        <div className="p-3 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <StuSvg className="w-7 h-7 mb-1" />
          <p className="text-lg">Students</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            243
          </p>
        </div>
        <div className="p-3 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <CourseSvg className=" w-7 h-7 mb-1" />
          <p className="text-lg">Course</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            13
          </p>
        </div>
        <div className="p-3 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <PaySvg className="w-7 h-7 mb-1 " />
          <p className="text-lg">Payments</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            500,000₺
          </p>
        </div>
        <div className="p-3 w-64 h-32 bg-orange-500 bg-opacity-50 text-white relative mr-6">
          <UsersSvg className="w-7 h-7 mb-1" />
          <p className="text-lg">Users</p>
          <p className="absolute bottom-0 right-0 p-4 mr-4 text-black font-bold text-xl">
            3
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
