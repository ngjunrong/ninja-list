// export default async function handler(req, res) {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/movie/550?api_key=0a8a9dd71895061d3ff3c603c308e806"
//   );
//   const data = await response.json();
//   res.status(200).json(data);
// }

const movie = ({ title, index, overview, poster_path }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="movie" key={index}>
      {/* <h3>{title}</h3> */}
      <img src={IMAGES_API + poster_path} alt={title} />
      <div className="movie-overview">{overview}</div>
    </div>
  );
};
export default movie;
