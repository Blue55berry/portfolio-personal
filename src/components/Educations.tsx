import React from "react";

const Educations = () => {
  return (
    
    <div className="w-full min-h-screen flex items-center justify-center bg-white/80 py-20 md:py-12">
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 py-6 pb-24 md:pb-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-center sacramento-regular">
          My Education
        </h1>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 sm:p-5 shadow-md w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              SSLC
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base">
              <span>Name:</span>
              <span className="font-bold">ST.Joseph High School</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base">
              <span>Percentage:</span>
              <span className="font-medium">67.4%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-xl p-4 sm:p-5 shadow-md w-full">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              HSC
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base">
              <span>Name:</span>
              <span className="font-bold">Nanjappa Higher Secondary School</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base">
              <span>Percentage:</span>
              <span className="font-medium">61%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-4 sm:p-5 shadow-md w-full min-h-[120px] flex flex-col justify-center">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              College
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base w-full">
              <span>Name:</span>
              <span className="font-bold">Erode Sengunthar Engineering College</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-sm sm:text-base">
              <span>CGPA:</span>
              <span className="font-medium">7.6%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Educations;
