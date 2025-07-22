import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="bg-gray-800 py-16 px-6 sm:px-10 text-emerald-400 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Our Impact So Far 
      </h2>
      <p className="mb-10 max-w-2xl mx-auto text-lg text-emerald-300">
        We're proud of the community we've built and the opportunities we've helped create.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-emerald-200">
            {inView && <CountUp end={1200} duration={2} />}
            <span>+</span>
          </h3>
          <p className="mt-2 text-emerald-500 text-lg font-medium">Active Users</p>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-emerald-200">
            {inView && <CountUp end={350} duration={2.5} />}
            <span>+</span>
          </h3>
          <p className="mt-2 text-emerald-500 text-lg font-medium">Startups Funded</p>
        </div>

        <div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-emerald-200">
            {inView && <CountUp end={90} duration={2} />}
            <span>%</span>
          </h3>
          <p className="mt-2 text-emerald-500 text-lg font-medium">Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;