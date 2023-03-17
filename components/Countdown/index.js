import { useState, useEffect } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2023-03-28");
      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-5 mt-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">iSocks are Coming Soon!</h1>
        <p className="text-2xl mb-4">
          We're working hard to bring you our exciting new product. Stay
          tuned for updates and be the first to know when it launches!
        </p>
        <p className="text-2xl mb-4">
          In the meantime, make sure to claim your wardrobe name soon before
          someone else does.
        </p>
        <div>
          <a
            className="bg-[var(--primary-brand)] hover:bg-transparent hover:text-[var(--primary-brand)] hover:border-black hover:border text-xl duration-500  text-white font-bold py-2 px-4 rounded inline-flex gap-2 justify-center"
            href="https://unstoppabledomains.com/?ref=infinityauctions"
            target="blank"
          >
            <img
              src="/img/icons/unstoppable.svg"
              alt=""
              className="w-[25px] h-[25px]"
            />
            Claim Your Wardrobe Name
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
            <div className="font-bold text-xl">DAYS</div>
            <div className="text-4xl">{timeLeft.days || "0"}</div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
            <div className="font-bold text-xl">HOURS</div>
            <div className="text-4xl">{timeLeft.hours || "0"}</div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
            <div className="font-bold text-xl">MINUTES</div>
            <div className="text-4xl">{timeLeft.minutes || "0"}</div>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center">
            <div className="font-bold text-xl">SECONDS</div>
            <div className="text-4xl">{timeLeft.seconds || "0"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
