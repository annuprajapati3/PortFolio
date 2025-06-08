import home from "../../assets/home.jpg";
import { IoEyeSharp, IoCloudDownloadSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import bg from "../../assets/bg.jpg";
const Home1 = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-6 md:px-20 pt-62 md:pt-36 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.75)), url(${home})`,
      }}
    >
      {/* ---------- Left Content ---------- */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Hello, I'm <span className="text-[#4F46E5]">Annu Prajapati</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
          MERN Stack Developer
        </h2>

        <p className="text-base sm:text-lg max-w-xl mx-auto md:mx-0 text-gray-800">
          I’m a passionate and detail-oriented developer with a strong
          foundation in full-stack web development. I transform complex
          problems into clean, scalable, and user-friendly solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-md bg-[#4F46E5] text-white hover:opacity-90 transition">
            <IoEyeSharp className="text-xl" />
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-md bg-white border border-gray-400 hover:bg-gray-100 transition"
          >
            <IoCloudDownloadSharp className="text-xl" />
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 pt-4 text-gray-700">
          <a
            href="https://www.linkedin.com/in/annu-prajapati/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4F46E5] transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/annuprajapati3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4F46E5] transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:annuprajapati0004@gmail.com"
            className="hover:text-[#4F46E5] transition"
          >
            <IoMdMail className="text-2xl" />
          </a>
        </div>
      </div>

      {/* ---------- Right Image ---------- */}
      <div className="mt-12 lg:mt-0 lg:pr-20">
        <div className="h-60 w-60 sm:h-72 sm:w-72 rounded-full border-4 border-[#4F46E5] overflow-hidden mx-auto -mt-10 sm:-mt-20 lg:mt-0">
          <img
            src={bg}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home1;
