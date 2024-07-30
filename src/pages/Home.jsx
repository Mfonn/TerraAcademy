import { GrDownload } from 'react-icons/gr';
import terImage from '../assets/ter-img.png';
import mainImage from '../assets/terac.jpg';
import Header from '../shared/Header';

const Program = () => {
  return (
    <div className="w-[775px] border border-[#7587A2] border-opacity-[0.81] rounded-lg flex-shrink-0">
      <div className="flex items-start justify-between p-6 pt-10 border-b border-[#7587A2] border-opacity-[0.81]">
        <h2 className="font-helvetica font-medium text-[30px] text-black leading-5 underline">
          Electrical and Power Systems
        </h2>
      </div>
      <div className="p-6">
        <p className="font-bold text-lg">2 UPCOMING SESSIONS</p>
      </div>

      <div className="p-6 pt-0">
        <p className="text-lg text-[#121212]">
          <strong>Status:</strong> Accepting Applications
        </p>
        <p className="mt-1">
          <strong>Dates</strong>: 02 SEP-15 NOV 2024 | <strong>LOCATION</strong>{' '}
          : LEADXERA ( Virtual ) | <strong>Fee</strong>: 000
        </p>
      </div>

      <div className="p-6 bg-[#E3ECFC]">
        <p className="text-lg leading-[25px] font-helvetica mb-4 text-[#2C2C2C]">
          Lorem ipsum dolor sit ndit praesent luptatum zzril delenit augueduis
          dolore te feugait nulla facilisi. Lorem ipsum dolor sit
        </p>
        <p className="font-bold mb-1 text-lg text-[#2C2C2C]">
          Who should Attend:
        </p>
        <p className="text-lg leading-[25px] font-helvetica mb-4 text-[#2C2C2C]">
          Lorem ipsum dolor sit ndit praesent luptatum zzril delenit augueduis
          dolore te feugait nulla facilisi. Lorem ipsum dolor sit
        </p>
        <p className="font-bold mb-1 text-lg text-[#2C2C2C]">Key Benefits:</p>
        <p className="text-lg leading-[25px] font-helvetica mb-4 text-[#2C2C2C]">
          Lorem ipsum dolor sit ndit praesent luptatum zzril delenit augueduis
          dolore te feugait nulla facilisi. Lorem ipsum dolor sit
        </p>
        <div>
          <button className="flex items-end justify-start">
            <GrDownload fontSize={24} className="bold" />{' '}
            <span className="font-bold text-lg text-[#2C2C2C] leading-4 ml-3">
              Download Brochure
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <div>
      <Header />

      <div className="bg-[#284F9A] h-[435px] flex justify-center items-start overflow-visible relative">
        <div className="absolute py-14 bg-white pr-6 pl-[5%] top-[34%] left-[6%] w-[35%]">
          <h2 className="text-[42px] leading-[38px]">
            TerraGen Technical Training Academy
          </h2>
        </div>
        <img className="h-[497px] max-w-[33%] object-cover" src={mainImage} />
      </div>

      <div className="mt-20 flex items-start  justify-start font-[Helvetica Nue] mb-32">
        <div className="w-[33%] px-[6%]">
          <h2 className="text-black font-medium text-[27px] mb-4">
            Explore Our Faculties
          </h2>
          <a
            href="#"
            className="bg-[#E3ECFC] w-full h-[72px] flex items-center justify-center mb-4 px-4"
          >
            <p className="font-medium text-lg text-center">
              Faculty of Technical{' '}
            </p>
          </a>
          <a
            href="#"
            className="bg-[#E3ECFC] w-full h-[72px] flex items-center justify-center mb-4 px-4"
          >
            <p className="font-medium text-lg text-center">
              Faculty of Upskilling
            </p>
          </a>
          <a
            href="#"
            className="bg-[#E3ECFC] w-full h-[72px] flex items-center justify-center mb-4 px-4"
          >
            <p className="font-medium text-lg text-center">
              Faculty of Continuous Development
            </p>
          </a>

          <div className="mt-1 mb-5">
            <p className="font-medium text-lg text-[#121212]">
              Need Help? Contact Us:
            </p>
            <p className="text-[#121212]">Program Advising team</p>
            <p className="text-[#121212]">Email: support@terragen.com.ng</p>
          </div>

          <div>
            <a
              href="#"
              className="w-full h-[46px] flex items-center justify-center mb-5 px-4 border border-[#193A76] rounded-[4px]"
            >
              <p className="font-medium text-lg text-center">Program Finder</p>
            </a>
            <a
              href="#"
              className="w-full h-[46px] flex items-center justify-center mb-5 px-4 border border-[#193A76] rounded-[4px]"
            >
              <p className="font-medium text-lg text-center">
                Download Brochure
              </p>
            </a>
            <a
              href="#"
              className="w-full h-[46px] flex items-center justify-center mb-5 px-4 border border-[#193A76] rounded-[4px]"
            >
              <p className="font-medium text-lg text-center">
                Full Program Schedule
              </p>
            </a>
          </div>

          <div>
            <div className="p-2 gradient flex items-center justify-center">
              <img className="h-[151px] object-contain" src={terImage} />
            </div>
            <div className="p-3 bg-[#284F9A]">
              <h1 className="text-[27px] leading-[23px] text-white pt-3 font-helvetica underline">
                BUILDING GREAT LEADERS
              </h1>
              <p className="text-white text-lg mt-3 font-helvetica mb-3">
                The extensive leadership programs at TERRA ACADEMY empower
                executives to become exceptional global leaders.
              </p>

              <a
                href="#"
                className="text-white text-lg underline inline-block font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 px-2 pr-10 overflow-hidden">
          <div className="max-w-[742px] mt-8">
            <h1 className="text-[37px] font-medium text-[#1A1A1A] font-helvetica mb-3">
              Empowering Skills for Terragen&apos;s Tomorrow
            </h1>
            <p className="text-2xl text-black leading-[28px]">
              Indulge in the exploration of the array of 5 distinctive courses
              that await you in our comprehensive catalog.
            </p>
            <div className="h-[1px] bg-[#7587A2] bg-opacity-[0.81] my-10"></div>
            <p className="text-2xl text-black leading-[28px]">
              The Terragen Technical Academy provides specialized training for
              vendors and staff in Terragen&apos;s technology offering
              certification and up-skilling programs through its Technical
              Certifications School and Up-Skilling School faculties.
            </p>
            <p className="font-medium text-xl my-10">
              Select up to three programs to compare key features and benefits.
            </p>
          </div>
          <div className="overflow-scroll w-full flex justify-start items-start gap-x-8">
            <Program />
            <Program />
            <Program />
            <Program />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
