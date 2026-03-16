import church from "../assets/church.jpeg";
import worship1 from "../assets/worship.jpg";
import worship2 from "../assets/worship.jpg";
import worship3 from "../assets/worship.jpg";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import event1 from "../assets/21+th+2.png";
import event2 from "../assets/Baptism+Web+Square+1200x1200.webp";
import event3 from "../assets/Good+Friday+Square.png";

const Home = () => {
  return (
    <div className="w-full">
      <section className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${church})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Jesus is the only one <br className="hidden md:block" /> who can
            change anyone.
          </h1>
          <p className="text-lg md:text-xl mb-10 font-medium">
            Join us for Sunday services at 8:00, 9:30, or 11:00 AM
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              Join us for services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition">
              Stream online
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white flex justify-center">
        <div className="w-full max-w-6xl bg-[#1E4B7A] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center relative overflow-hidden">
          <div className="w-full md:w-1/2 z-10 text-left pr-0 md:pr-10">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-6">
              Real People. Real Stories. Real Transformation.
            </h3>
            <p className="text-white text-3xl md:text-5xl font-serif italic leading-snug">
              We are forming fully surrendered disciples who love God, love
              others, and share Jesus.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-16 md:mt-0 relative h-100 md:h-125 flex justify-center items-center">
            <div className="absolute right-0 md:-right-10 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#F5F5F3]">
              <img
                src={worship1}
                alt="Worship"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-10 md:left-20 bottom-10 md:bottom-20 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#F5F5F3] z-20">
              <img
                src={worship2}
                alt="Baptism"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute right-10 md:-right-4 -bottom-10 md:bottom-0 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#F5F5F3] z-20">
              <img
                src={worship3}
                alt="Band Worship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end gap-4 mb-6 text-gray-500">
            <button className="hover:text-gray-900 transition focus:outline-none">
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-900 transition focus:outline-none">
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-4/5 bg-blue-500 mb-4 overflow-hidden">
                <img
                  src={event1}
                  alt="21 Days of Prayer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                />
                <div className="absolute top-0 right-0 bg-white px-3 py-2 text-center text-gray-900">
                  <span className="block text-xs tracking-wider font-semibold uppercase">
                    Mar
                  </span>
                  <span className="block text-xl font-medium">15</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                21 Days of Prayer
              </h3>
              <p className="text-gray-900 text-sm mt-1 font-medium hover:underline">
                View Event
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Mar 15, 2026 - Apr 4, 2026
              </p>
            </div>

            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-4/5 bg-teal-800 mb-4 overflow-hidden">
                <img
                  src={event2}
                  alt="Baptisms"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                />
                <div className="absolute top-0 right-0 bg-white px-3 py-2 text-center text-gray-900">
                  <span className="block text-xs tracking-wider font-semibold uppercase">
                    Mar
                  </span>
                  <span className="block text-xl font-medium">22</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Baptisms</h3>
              <p className="text-gray-500 text-xs mt-2">Mar 22, 2026</p>
            </div>

            <div className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-4/5 bg-gray-900 mb-4 overflow-hidden">
                <img
                  src={event3}
                  alt="Good Friday Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
                />
                <div className="absolute top-0 right-0 bg-white px-3 py-2 text-center text-gray-900">
                  <span className="block text-xs tracking-wider font-semibold uppercase">
                    Apr
                  </span>
                  <span className="block text-xl font-medium">3</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Good Friday Service
              </h3>
              <p className="text-gray-500 text-xs mt-2">Apr 3, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 bg-white">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Connect with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <div className="bg-gray-100 p-8 rounded-xl text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                New Here?
              </h3>
              <p className="text-gray-600 mb-4">
                Learn more about our weekend services.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Small Groups
              </h3>
              <p className="text-gray-600 mb-4">Find your people here.</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Join a Group
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Growth Track
              </h3>
              <p className="text-gray-600 mb-4">
                Step into the story you were made for.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prayer</h3>
              <p className="text-gray-600 mb-4">
                We'd be honored to pray for you.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Request Prayer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
            Latest Sermon
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chasing after meaning.
          </h2>
          <p className="text-xl text-gray-300 mb-8 italic">
            "Meaningless! Meaningless! Utterly Meaningless! Everything is
            meaningless." - Ecc 1:2
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
            Watch Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
