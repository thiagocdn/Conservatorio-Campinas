import { motion } from "framer-motion"
import {
  FaInstagramSquare,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const Footer: React.FC = () => {

  function handleInstagram() {
    window.open("https://www.instagram.com/conservatoriocampinas/");
  };

  function handleFacebook() {
    window.open("https://www.facebook.com/conservatoriocampinas");
  };

  function handleYoutube() {
    window.open("https://www.youtube.com/");
  };

  return(
    <footer className="bg-white w-full mt-12 bg-white px-4 w-full justify-center items-center py-2 md:py-4">
      <div className="flex w-full justify-around m-auto items-center w-full max-w-screen-lg justify-between">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <div className="mb-4 md:mb-0">
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >Av. Washington Luiz, 1945</p>
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >Parque Prado</p>
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >Campinas - SP</p>
          </div>
          <div>
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >(19) 3271.4748</p>
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >(19) 3383.2687</p>
          </div>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="flex w-full justify-center">
            <p
              className="font-bold text-xs sm:text-sm"
              style={{color: '#9E251F'}}
            >HORÁRIOS</p>
          </div>
          <div className="flex justify-around w-full">
            <div>
              <p
                className="font-bold text-xs sm:text-sm"
                style={{color: '#9E251F'}}
              >Seg. à Sex.:</p>
              <p
                className="font-bold text-xs sm:text-sm"
                style={{color: '#9E251F'}}
              >8h30 às 12h</p>
              <p
                className="font-bold text-xs sm:text-sm"
                style={{color: '#9E251F'}}
              >13h às 22h</p>
            </div>
            <div>
              <p
                className="font-bold text-xs sm:text-sm"
                style={{color: '#9E251F'}}
              >Sábado:</p>
              <p
                className="font-bold text-xs sm:text-sm"
                style={{color: '#9E251F'}}
              >8h30 às 14h</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-24">
          <FaInstagramSquare className="cursor-pointer" onClick={handleInstagram} color="#9E251F" size={30} />
          <FaFacebookF className="cursor-pointer" onClick={handleFacebook}  color="#9E251F" size={30} />
          <FaYoutube className="cursor-pointer" onClick={handleYoutube} color="#9E251F" size={30} />
        </div>
      </div>
      <div className="flex w-full justify-around m-auto items-center w-full max-w-screen-lg justify-between p-2">
        <p
          className="font-bold text-xs sm:text-sm"
          style={{color: '#9E251F'}}
        >contato@conservatoriocampinas.com</p>
      </div>
    </footer>
  )
}

export default Footer;