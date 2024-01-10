
"use client"

import Brands from '@/components/Brands';
import Hero from '@/components/Hero';
import MoviesCollection from '@/components/MoviesCollection';
import ShowsCollection from '@/components/ShowsCollection';
import Slider from '@/components/Slider';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'

export default function Home() {


  const [popularMovies, setPopularMovies] = useState([]);
const [popularShows, setPopularShows] = useState([]);
const [topRatedMovies, setTopRatedMovies] = useState([]);
const [topRatedShows, setTopRatedShows] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const [
        popularMoviesRes,
        popularShowsRes,
        topRatedMoviesRes,
        topRatedShowsRes,
      ] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=9cf1e3b8c5bc00983aa613a484fb173e`
        ),
        fetch(
          `https://api.themoviedb.org/3/tv/popular?api_key=9cf1e3b8c5bc00983aa613a484fb173e&language=en-US&page=1`
        ),
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=9cf1e3b8c5bc00983aa613a484fb173e&language=en-US&page=1`
        ),
        fetch(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=9cf1e3b8c5bc00983aa613a484fb173e&language=en-US&page=1`
        ),
      ]);

      const [
        popularMoviesResData,
        popularShowsResData,
        topRatedMoviesResData,
        topRatedShowsResData,
      ] = await Promise.all([
        popularMoviesRes.json(),
        popularShowsRes.json(),
        topRatedMoviesRes.json(),
        topRatedShowsRes.json(),
      ]);

      setPopularMovies(popularMoviesResData.results || []);
      setPopularShows(popularShowsResData.results || []);
      setTopRatedMovies(topRatedMoviesResData.results || []);
      setTopRatedShows(topRatedShowsResData.results || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
}, []);

  
const { data } = useSession();

console.log(data)
  

  
  console.log(popularShows)


return (
<div className='overflow-hidden '>
{!data ? (
   <Hero/>
):(

  

 
  <div className=' bg-[#040714] text-[grey] h-full w-full py-2 px-6 '>
  <Slider/>
  <Brands/>
  <MoviesCollection results={popularMovies} title="Popular Movies" />
  
  
  <ShowsCollection results={popularShows} title="Popular Shows" />
  
  <MoviesCollection
  results={topRatedMovies}
  title="Top Rated Movies"
  />
  <ShowsCollection results={topRatedShows} title="Top Rated Shows" />
  
  
  
    </div> 
 

)}


</div>


);
}



  


