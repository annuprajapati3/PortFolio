const Progress = ({ progresspart }) => {
  return (
    <div className="relative w-full h-2  rounded-md bg-gray-300 group">
      <div
        className="h-full bg-[#4F46E5] rounded-md transition-all duration-300"
        style={{ width: `${progresspart}%` }}
      ></div>

      {/* Tooltip shown on hover */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
        {progresspart}%
      </div>
    </div>
  );
};

export default Progress;
