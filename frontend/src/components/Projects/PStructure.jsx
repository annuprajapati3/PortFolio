import Tech from "../Skills/Tech";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const PStructure = ({img , repolink , project , details , arr}) => {
  return (
    <>
      <div
        className="border border-gray-300 shadow-2xl rounded-md
                      transform transition-transform duration-300
                      hover:scale-105"
      >
       <div className="relative group bg-gray-300 w-full h-64 overflow-hidden">
  <img
    src={img}
    alt="project"
    className="rounded-t-md w-full h-full object-cover hover:opacity-40 transition duration-300"
/>
  <a href={repolink} target="_blank" rel="noopener noreferrer">
    <FaGithub className="absolute inset-0 m-auto text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#4F46E5]" />
  </a>
</div>

        <p className="text-xl font-bold p-4">{project}</p>
        <p className="text-lg px-4">{details}
        </p>
        <Tech
          arr={arr}
        ></Tech>
        <a href={repolink} target="_blank"><button className="bg-[#4F46E5] flex justify-center items-center gap-2 p-2 rounded-md m-4 text-lg font-semibold cursor-pointer">View project <FaArrowRight className="text-black text-xl"/> </button></a>
      </div>
    </>
  );
};
export default PStructure;
