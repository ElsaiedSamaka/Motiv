import Image from "next/image";
import PeopleRushing from "/public/images/dashboard-page/People-rushing.png";
import Trophy from "/public/images/dashboard-page/trophy.png";
import DesignerDesktop from "/public/images/dashboard-page/designer-descktop.png";
const Features = () => {
  return (
    <div className="grid grid-cols-12 gap-3 mb-4 font-medium">
      <div className="bg-[#FFE0BA] col-span-full lg:col-span-7 inline-flex items-center justify-between rounded-md py-3 px-6 ">
        <div className="flex-col justify-around space-y-2 leading-relaxed ">
          <em className="text-3xl font-['ABeeZee']">Apply for a car loan !</em>
          <p className="text-2xl font-['ABeeZee'] py-4">
            This is a sample of a generated text
          </p>
          <a
            role="button"
            className="py-2.5 px-5 mr-2 my-2 text-sm font-medium focus:outline-none bg-[#0F2837] text-white rounded hover:bg-[#0f2837d7] hover:text-white/90"
          >
            <em>Discover More</em>
          </a>
        </div>
        <div className="bg-[#FFE0BA] max-w-fit xs:col-span-full">
          <Image src={DesignerDesktop} alt="designer-desktop" />
        </div>
      </div>
      <div className="col-span-full lg:col-span-5 flex justify-between space-x-2 w-full font-['ABeeZee']">
        <div className="bg-[#0F2837]  text-white  rounded-md p-6 min-w-[50%]">
          <Image className="float-right w-32 h-32" src={Trophy} alt="trophy" />
          <p className="text-xl mt-5">
            You have earned{" "}
            <em className="text-[#FF9619] text-5xl block">20</em>
            <em>Badges!</em>
          </p>
          <span className="text-[#FF9619] text-sm ">
            Hooray! Way to go Saied!
          </span>
        </div>
        <div className="bg-[#6E1946]  text-white  rounded-md p-6 min-w-[50%]">
          <Image
            className="float-right w-32 h-32"
            src={PeopleRushing}
            alt="award"
          />
          <p className="text-xl mt-5">
            You have earned{" "}
            <span className="text-[#FAC39B] text-5xl block">
              <em>1500</em>
            </span>
            <em>Points!</em>
          </p>
          <span className="text-[#FAC39B] text-sm">
            Redeem and claim your rewards!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
