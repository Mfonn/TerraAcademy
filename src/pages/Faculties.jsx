import Header from '../shared/Header';

// eslint-disable-next-line react/prop-types
const Faculty = ({ bg, faculty }) => {
  const bcg =
    bg === 0 ? `bg-[#2968E0]` : bg === 1 ? `bg-[#284F9A]` : `bg-[#5E95FC]`;
  return (
    <div className="w-[420px] p-2 rounded-[10px] drop-shadow-cs bg-white">
      <div className={`h-[312px] w-full ${bcg} rounded-t py-14 px-6`}>
        <p className="text-white text-[35px] leading-[35px]">Faculty of</p>
        <p className="font-medium text-white text-[51px] leading-[49px]">
          {faculty}
        </p>
      </div>
      <div className="p-2 mt-6 flex justify-between items-center">
        <p className="text-[11px]">
          ndit praesent luptatum zzril delenit augue duis dolorndit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit e te feugait nulla facilisi. Lorem ipsum dolor
          sit ndit praesent luptatum zzrildelenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit{' '}
        </p>

        <div className="flex-shrink-0 ml-2">
          <a
            href="#"
            className="flex items-center justify-center bg-black text-white py-2 px-3 rounded-lg text-[8px] uppercase"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

function Faculties() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mb-3">
        <h1 className="text-[60px] font-medium">Explore Our Faculties</h1>
      </div>

      <div className="flex justify-between items-start gap-x-6 px-32 py-14">
        <Faculty bg={0} faculty="upskilling" />
        <Faculty bg={1} faculty="Continuous Development" />
        <Faculty bg={2} faculty="Technical" />
      </div>
    </div>
  );
}

export default Faculties;
