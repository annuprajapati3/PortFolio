import bg from "../../assets/aboutbg.jpg";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaUserGraduate } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const About1 = () => {
  return (
    <>
      {/* Section Title */}
      <div className="py-10 flex justify-center items-center text-center" id="about">
        <h1 className="text-4xl font-bold relative inline-block after:block after:h-[4px] after:w-16 after:bg-[#4F46E5] after:mt-2 after:mx-auto">
          About Me
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-8 gap-8">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={bg}
            alt="About Background"
            className="w-full max-w-sm rounded-md shadow-md"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-2xl font-bold text-[#4F46E5]">
            MERN Stack Developer
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            I am a passionate and detail-oriented MERN Stack Developer with
            strong foundational knowledge in full-stack web development. I have
            built real-world projects that involve frontend interfaces, secure
            backend architectures, RESTful APIs, and real-time communication
            using Socket.io.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            I enjoy transforming complex problems into clean, scalable, and
            user-friendly solutions. My goal is to create applications that not
            only meet technical requirements but also provide exceptional user
            experiences.
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base pt-4">
            <div className="flex items-center gap-2">
              <IoMdMail className="text-[#4F46E5]" />
              <p>annuprajapati0004@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#4F46E5]" />
              <p>9354090359</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUserGraduate className="text-[#4F46E5]" />
              <p>Computer Science (Data Science)</p>
            </div>
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-[#4F46E5]" />
              <p>India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
