// import MovieThumbnail from "./MovieThumbnail";

import MovieThumbnail from "./MovieThumbnail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MoviesCollection({ results, title }) {
  const limitedResults = results.slice(0, 12); // Get the first 10 results

  
   

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
   
  };
 

  return (
    <div className="relative my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">{title}</h2>
      {/* <div className="flex space-x-6 overflow-x-auto hide-scroll-bar"> */}

      <Slider {...settings}>
        {limitedResults.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </Slider>
      {/* </div> */}

     
    </div>
  );
}





export default MoviesCollection;



