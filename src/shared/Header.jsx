import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="h-[72px] bg-black flex justify-between items-center px-11">
        <Link to="/" className="text-white font-medium text-xl">
          TERRA ACADEMY
        </Link>

        <div className="flex">
          <button>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-8"
            >
              <path
                d="M42.0004 41.9999L33.3144 33.3139M33.3144 33.3139C34.8002 31.8281 35.9788 30.0643 36.7829 28.123C37.587 26.1818 38.0008 24.1011 38.0008 21.9999C38.0008 19.8987 37.587 17.8181 36.7829 15.8768C35.9788 13.9356 34.8002 12.1717 33.3144 10.6859C31.8286 9.20015 30.0648 8.02157 28.1235 7.21747C26.1822 6.41337 24.1016 5.99951 22.0004 5.99951C19.8992 5.99951 17.8186 6.41337 15.8773 7.21747C13.9361 8.02157 12.1722 9.20015 10.6864 10.6859C7.68575 13.6866 6 17.7564 6 21.9999C6 26.2435 7.68575 30.3133 10.6864 33.3139C13.6871 36.3146 17.7568 38.0003 22.0004 38.0003C26.244 38.0003 30.3138 36.3146 33.3144 33.3139Z"
                stroke="white"
                strokeWidth="5.3125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8"
            >
              <path
                d="M40 35C40.7704 35.0004 41.5112 35.2972 42.0688 35.8288C42.6264 36.3605 42.958 37.0863 42.995 37.8558C43.0321 38.6254 42.7716 39.3797 42.2677 39.9624C41.7637 40.5451 41.0548 40.9117 40.288 40.986L40 41H8C7.22957 40.9996 6.48881 40.7028 5.93123 40.1712C5.37364 39.6395 5.04198 38.9137 5.00495 38.1442C4.96793 37.3746 5.22838 36.6203 5.73235 36.0376C6.23632 35.4549 6.94516 35.0883 7.712 35.014L8 35H40ZM40 21C40.7957 21 41.5587 21.3161 42.1213 21.8787C42.6839 22.4413 43 23.2044 43 24C43 24.7956 42.6839 25.5587 42.1213 26.1213C41.5587 26.6839 40.7957 27 40 27H8C7.20435 27 6.44129 26.6839 5.87868 26.1213C5.31607 25.5587 5 24.7956 5 24C5 23.2044 5.31607 22.4413 5.87868 21.8787C6.44129 21.3161 7.20435 21 8 21H40ZM40 7C40.7957 7 41.5587 7.31607 42.1213 7.87868C42.6839 8.44129 43 9.20435 43 10C43 10.7956 42.6839 11.5587 42.1213 12.1213C41.5587 12.6839 40.7957 13 40 13H8C7.20435 13 6.44129 12.6839 5.87868 12.1213C5.31607 11.5587 5 10.7956 5 10C5 9.20435 5.31607 8.44129 5.87868 7.87868C6.44129 7.31607 7.20435 7 8 7H40Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-4 px-32 flex justify-end">
        <div className="flex gap-x-4 mr-24">
          <a className="text-lg text-[#07296A] hover:underline" href="#">
            APPLY / LOG IN
          </a>
          <a className="text-lg text-[#07296A] hover:underline" href="#">
            PROGRAM FINDER{' '}
          </a>
          <a className="text-lg text-[#07296A] hover:underline" href="#">
            BLOG
          </a>
          <a className="text-lg text-[#07296A] hover:underline" href="#">
            FAQS
          </a>
        </div>
      </div>

      <div className="bg-[#E3ECFC] flex items-center justify-center gap-x-16 p-5 mb-6">
        <a
          href="#"
          className="font-medium text-xl text-[#07296A] hover:underline"
        >
          Courses
        </a>
        <a
          href="#"
          className="font-medium text-xl text-[#07296A] hover:underline"
        >
          About
        </a>
        <Link
          to="/faculties"
          className="font-medium text-xl text-[#07296A] hover:underline"
        >
          Faculties
        </Link>
        <a
          href="#"
          className="font-medium text-xl text-[#07296A] hover:underline"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}

export default Header;
