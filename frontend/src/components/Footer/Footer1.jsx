//#1F2937
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer1 = () => {
  return (
    <>
      <div className="bg-[#1F2937] ">
        <div className="flex justify-between p-8 ml-8">
          <div>
            <p className="text-2xl text-white font-bold  mt-7">ANNU PRAJAPATI</p>
            <p className="text-lg text-gray-400">MERN Developer</p>
          </div>
          <div className="flex gap-3 mt-10 mr-9">
            <a href="https://www.linkedin.com/in/annu-prajapati/">
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a href="https://github.com/annuprajapati3">
              {" "}
              <FaGithub className="text-2xl text-white" />
            </a>
            <a href="mailto:annuprajapati0004@gmail.com">
              <IoMdMail className="text-2xl text-white" />
            </a>
          </div>
        </div>
        <div className=" h-[1px] bg-gray-400 ml-10 mr-10"></div>
        <p className="text-gray-300 flex justify-center items-center p-8">© 2025 Annu Prajapati. All rights reserved.</p>
      </div>
    </>
  );
};
export default Footer1;
