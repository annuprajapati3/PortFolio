import { ImWrench } from "react-icons/im";
import Progress from "./progress";
import Tech from "./Tech";

const Skills1 = () => {
  return (
    <>
      {/* section heading */}
      <div className="flex justify-center" id="skills">
        <p className="pt-20 text-4xl font-bold relative inline-block
                     after:block after:h-1 after:w-16 after:bg-[#4F46E5]
                     after:mt-2 after:mx-auto">
          My Skills
        </p>
      </div>

      {/* 3-card row */}
      {/* 3-card row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-12">
  {/* ---- Card 1 ---- */}
  <div className="p-4 border border-gray-300 shadow-md rounded-md">
    <div className="flex items-center justify-center gap-2 mb-4">
            <ImWrench className="text-[#4F46E5] text-xl" />
            <p className="text-2xl font-bold">Technical Skills</p>
          </div>

          <p className="font-semibold text-lg">Front-End Development</p>
          <Progress progresspart={85} />
          <Tech arr={["HTML", "CSS", "JavaScript", "React.js"]} />

          <p className="font-semibold text-lg mt-4">Back-End Development</p>
          <Progress progresspart={80} />
          <Tech arr={["Node.js", "Express.js", "MongoDB"]} />

          <p className="font-semibold text-lg mt-4">Tools & Technologies</p>
          <Progress progresspart={65} />
          <Tech arr={["Git", "GitHub", "VS Code", "RESTful API"]} />
  </div>

  {/* ---- Card 2 ---- */}
  <div className="p-4 border border-gray-300 shadow-md rounded-md">
     <div className="flex items-center justify-center gap-2 mb-4">
                <ImWrench className="text-[#4F46E5] text-xl" />
                <p className="text-2xl font-bold">Core Skills</p>
              </div>
            <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg mt-5">Data Structures & Algorithms</p>
          <Progress progresspart={50} />

          <p className="font-semibold text-lg mt-4">Object-Oriented Programming</p>
          <Progress progresspart={40} />

          <p className="font-semibold text-lg mt-4">Problem Solving</p>
          <Progress progresspart={65} />
          <p className="font-semibold text-lg mt-4">API Development</p>
          <Progress progresspart={35} />
          <p className="font-semibold text-lg mt-4">Database Design</p>
          <Progress progresspart={45} />
          </div>
  </div>

  {/* ---- Card 3 ---- */}
  <div className="p-4 border border-gray-300 shadow-md rounded-md ">
     <div className="flex items-center justify-center gap-2 mb-4">
                <ImWrench className="text-[#4F46E5] text-xl" />
                <p className="text-2xl font-bold">Soft Skills</p>
              </div>
            <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg mt-5">Team Collaboration</p>
          <Progress progresspart={90} />

          <p className="font-semibold text-lg mt-4">LeaderShip</p>
          <Progress progresspart={80} />

          <p className="font-semibold text-lg mt-4">Communication</p>
          <Progress progresspart={85} />
          <p className="font-semibold text-lg mt-4">Time Management</p>
          <Progress progresspart={90} />
          <p className="font-semibold text-lg mt-4">Adaptability</p>
          <Progress progresspart={70} />
          </div>
  </div>
</div>

    
    </>
  );
};

export default Skills1;
