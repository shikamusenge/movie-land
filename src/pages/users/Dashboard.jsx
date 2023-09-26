import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieCard from "../../components/Home/MovieCard";
const Dashboard = () => {
  const navigate = useNavigate();
  const Account = JSON.parse(localStorage.getItem("userAcount")) || [];
  if (Account.length == 0) location.href = "/login";
  const [user] = Account;
  const [Movies, setMovie] = useState([]);
  const { firstName, lastName, email, username } = user;
  console.log(Movies);
  useEffect(() => {
    const getData = async () => {
      const url = "https://api.themoviedb.org/3/movie/now_playing";
      const options = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
        },
      };
      try {
        const resp = await axios.get(url, options);
        setMovie(resp.data.results);
      } catch (error) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="h-screen flex">
      <div className=" flex flex-col justify-center items-center gap-5 md:w-[20rem] border shadow-amber-800 shadow-2xl rounded-lg">
        <div>
          <div>
            <i className="fa fa-user text-[8rem] mx-4"></i>
          </div>
          <div className="text-center text-2xl">{username}</div>
        </div>
        <div className=" flex flex-col text-lg font-extrabold  justify-center text-center md:sticky">
          <div>
            <div>
              {firstName} {lastName}
            </div>
            <div>{username}</div>
            <div>
              {email} {lastName}
            </div>
          </div>
          <div
            className="h-fit px-10 py-3 bg-red-600 text-white mx-5 cursor-pointer rounded-lg"
            onClick={() => {
              localStorage.setItem("userAcount", "[]");
              navigate("/login");
            }}
          >
            Log out
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 overflow-x-auto w-4/6 ml-[2rem] pl-8">
        {Movies.length == 0 && (
          <img src="https://assets.materialup.com/uploads/b68f4460-aaa9-4e19-99d8-232dfea1c537/preview.gif" />
        )}
        {Movies.map((movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <div className="h-[22rem]">
              <MovieCard
                key={movie.id}
                name={movie.original_title}
                image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
