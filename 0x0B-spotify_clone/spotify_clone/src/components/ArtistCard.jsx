import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate()

  const handleClick = () => (navigate(`/artists/${track?.artists[0].adamid}`))

  return(
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" onClick={handleClick}>
      <img src={track?.images?.coverart} alt="artist" className="w-full h-56 rounded-lg"/>
      <p className="text-white mt-4 text-lg truncate font-semi-bold">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
