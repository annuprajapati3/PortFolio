import PStructure from "./PStructure";
import ride from '../../assets/ride.jpeg';
import fitness from '../../assets/ftness.png';
import weather from '../../assets/weather.jpg';
const Projects1 = ()=>{
    return<>
    <div className="flex justify-center" id="projects">
        <p className="pt-20 text-4xl font-bold relative inline-block
                     after:block after:h-1 after:w-16 after:bg-[#4F46E5]
                     after:mt-2 after:mx-auto">
          My Projects
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-12">
        <PStructure img={ride} repolink={"https://github.com/annuprajapati3/Ride-Booking-Application"} project={"Ride Booking Application"} details={"Developed a full-stack ride booking platform similar to Uber using MERN Stack, supporting real-time user-driver interaction via Socket.io."} arr={["React","Node","JWT","Mongodb","Socket.io"]}></PStructure>
         <PStructure img={fitness} repolink={"https://github.com/annuprajapati3/Ride-Booking-Application"} project={"Fitness Tracking Application"} details={"Designed a role-based authentication system for admins, trainers, and members with personalized dashboards and permissions."} arr={["React","Node","Mongodb","Authentication"]}></PStructure>
          <PStructure img={weather} repolink={"https://github.com/annuprajapati3/Weather_Application"} project={"Weather Forecaste Application"} details={"Integrated real weather APIs to improve accuracy and reduce inconsistencies by 40%. Enhanced user interface with Font Awesome icons."} arr={["Javascript","API integration","CSS"]}></PStructure>
    </div>
    </>
}
export default Projects1;