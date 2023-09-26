import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const DetailPage = () => {
  const [movieDetail, setDetail] = useState([]);
  const { mid } = useParams();
  console.log(movieDetail);
  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${mid}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzUxMjcyMGFmNmY0ZDUzNmY2YmY2MDEyNzBlNTRlMiIsInN1YiI6IjY1MTEyZDI5MjZkYWMxMDE0ZTIyYTgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8-09qdICI2J_-1b8VuFwZ8Vo1DuT2WSzMzI4MY2dUtk",
        },
      };
      try {
        const resp = await axios.get(url, options);
        setDetail(resp.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-center m-8 items-center">
      {movieDetail.map((item, index) => (
        <Link key={index} to={`/watch/${item.key}`}>
          <div className="shadow my-4 w-[20rem] p-4 hover:bg-slate-400 text-center rounded-md">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DetailPage;
