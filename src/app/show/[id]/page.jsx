'use client'

import { useSession } from "next-auth/react"
import Error from "next/error";
import { useRouter } from "next/navigation"

import Image from "next/image";

import React, { useEffect, useState } from 'react'

import ReactPlayer from "react-player/lazy";
import Hero from "@/components/Hero";

import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { AddCircleOutline, AddToQueueRounded } from "@mui/icons-material";

const ShowDetails = (ctx) => {


    const router = useRouter();
    
const { data } = useSession();
    const movieId = ctx.params.id
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const [showPlayer, setShowPlayer] = useState(false);


    const [movieDetails, setMovieDetails] = useState(

        {
            adult: false,
  backdrop_path: "",
  created_by: [],
  episode_run_time: [],
  first_air_date: "",
  genres: [],
  homepage: "",
  id: 0,
  in_production: false,
  languages: [],
  last_air_date: "",
  last_episode_to_air: null,
  name: "",
  next_episode_to_air: null,
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0,
          }

    );
    const [error, setError] = useState(null);


    

    useEffect(() => {
        const fetchMovieDetails = async () => {
          try {
            if (movieId) {
                const response = await fetch(
                  `https://api.themoviedb.org/3/tv/${movieId}?api_key=9cf1e3b8c5bc00983aa613a484fb173e&language=en-US&append_to_response=videos`
                );
      
                if (!response.ok) {
                  throw new Error('Network response was not ok.');
                }
      
                const data = await response.json();
                setMovieDetails(data)
            }
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchMovieDetails();
      }, [movieId]);
    

     console.log(movieDetails)
 
    
     const index = movieDetails?.videos?.results.findIndex(
        (element) => element.type === "Trailer"
      );
    
  

    
  return (
    <div className="relative">
    
      { !data ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src={
                `${BASE_URL}${movieDetails?.backdrop_path || movieDetails?.poster_path}` ||
                `${BASE_URL}${movieDetails?.poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {movieDetails?.title || movieDetails?.original_name}
            </h1>
            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <AddToQueueRounded className="h-6" />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>

            <p className="text-xs md:text-sm">
              {movieDetails?.release_date || movieDetails?.first_air_date} •{" "}
              {Math.floor(movieDetails?.runtime / 60)}h {movieDetails?.runtime % 60}m •{" "}
              {movieDetails?.genres.map((genre) => genre.name + " ")}{" "}
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{movieDetails.overview}</h4>
          </div>

          {/* Bg Overlay */}
          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}

          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setShowPlayer(false)}
              >
                <HighlightOffIcon className="h-5" />
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movieDetails?.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );



}


export default ShowDetails