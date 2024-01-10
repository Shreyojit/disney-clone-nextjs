import Image from "next/image";
import { useRouter } from "next/navigation";


function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300 m-2" // Added margin to create space between thumbnails
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <div className="rounded-lg overflow-hidden w-full h-full">
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          width={330}
          height={210}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default MovieThumbnail;
