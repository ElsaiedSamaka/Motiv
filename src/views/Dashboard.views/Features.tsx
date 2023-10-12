const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-10 gap-4 mb-4 h-60 font-semibold">
      <div className="bg-[#FFE0BA]  sm:col-span-full md:col-span-6 rounded-md py-3 px-6">
        left
      </div>
      <div className="col-span-4 flex flex-grow space-x-3">
        <div className="bg-[#0F2837] text-white grow rounded-md py-3 px-6">
          center
        </div>
        <div className="bg-[#6E1946] text-white grow rounded-md py-3 px-6">
          right
        </div>
      </div>
    </div>
  );
};

export default Features;
