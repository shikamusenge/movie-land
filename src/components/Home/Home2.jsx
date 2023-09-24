import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
function Home2() {
  const [latestMovies, setLatestMovie] = useState([]);
  const [UpcomingMovies, setUpcomingMovie] = useState([]);
  const [suggestedMovies, setSuggestedMovie] = useState([]);
  useEffect(() => {
    fetch("../src/components/Home/data.json")
      .then((res) => res.json())
      .then((Result) => {
        const { latest, upcoming, suggested } = Result;
        setLatestMovie(latest);
        setUpcomingMovie(upcoming);
        setSuggestedMovie(suggested);
      });
  }, []);
  return (
    <div>
      <div className="text-white">
        <div className="grid grid-cols-2 mx-[2rem]">
          <p className="font-bold text-2xl cursor-pointer">Upcoming</p>
          <p className="justify-right text-red-600 text-lg text-right font-semibold cursor-pointer">
            view all
          </p>
        </div>
        <div className="grid md:grid-cols-6 rever grid-cols-2 my-[3rem] pl-[2rem] h-[22rem]">
          {UpcomingMovies.map((item, i) => (
            <MovieCard
              key={i}
              name={item.name}
              image={item.image}
              durition={item.duration}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-[2rem]">
          <p className="font-bold text-2xl cursor-pointer text-white">
            Suggested for you
          </p>
          <p className="justify-right text-red-600 text-lg text-right font-semibold cursor-pointer">
            view all
          </p>
        </div>
        <div className="grid md:grid-cols-6 h-[22rem] grid-cols-2 my-[3rem] pl-[2rem]">
          {suggestedMovies.map((item, i) => (
            <MovieCard
              key={i}
              name={item.name}
              image={item.image}
              durition={item.duration}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 mx-[2rem]">
          <p className="font-bold text-2xl cursor-pointer text-white">Latest</p>
          <p className="justify-right text-red-600 text-lg text-right font-semibold cursor-pointer">
            view all
          </p>
        </div>
        <div className="grid md:grid-cols-6 grid-cols-2 my-[3rem] h-[22rem] pl-[2rem]">
          {latestMovies.map((item, i) => (
            <MovieCard
              key={i}
              name={item.name}
              image={item.image}
              durition={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home2;
