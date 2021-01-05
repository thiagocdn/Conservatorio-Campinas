import Image from 'next/image';
import Lottie from 'react-lottie';
import Link from 'next/link'
import { useState } from 'react';
import menuIcon from './menu.json';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

import {
  FaInstagramSquare,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';

const Header: React.FC = () => {
  const router = useRouter();
  const [ showMenu, setShowMenu ] = useState(false);
  const [ menuState, setMenuState] = useState({
    isStopped: true, isPaused: false, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function handleMenu() {
    setMenuState({
      ...menuState,
      isStopped: false,
      direction: menuState.direction === 1 ? -1 : 1,
    });
    setShowMenu(!showMenu);
  }

  function handleClickMenu(page: string) {
    handleMenu();
    router.push(`/${page}`);
  }

  function handleInstagram() {
    handleMenu();
    window.open("https://www.instagram.com/conservatoriocampinas/");
  };

  function handleFacebook() {
    handleMenu();
    window.open("https://www.facebook.com/conservatoriocampinas");
  };

  function handleYoutube() {
    handleMenu();
    window.open("https://www.youtube.com/");
  };

  return(
    <header
        className="fixed bg-white top-0 left-0 z-50 px-4 w-full justify-center items-center py-2 md:py-4"
      >

      <div
        className="flex m-auto items-center w-full max-w-screen-lg justify-between"
      >
        <Image width={200} height={60} src="/img/logo.png" alt="Logo"/>

        <nav className="hidden lg:block space-x-8">
          <Link href="/">
            <a className="tracking-wide hover:text-gray-300">Home</a>
          </Link>
          <Link href="/nossa_historia">
            <a className="tracking-wide hover:text-gray-300">Nossa Historia</a>
          </Link>
          <Link href="/corpo_docente">
            <a className="tracking-wide hover:text-gray-300">Corpo Docente</a>
          </Link>
          <Link href="/modalidades">
            <a className="tracking-wide hover:text-gray-300">Modalidades</a>
          </Link>
          <Link href="/galeria_de_fotos">
            <a className="tracking-wide hover:text-gray-300">Galeria de Fotos</a>
          </Link>
          <Link href="/contato">
            <a className="tracking-wide hover:text-gray-300">Contato</a>
          </Link>
        </nav>
        
        <button onClick={handleMenu} className="lg:hidden">
          <Lottie options={{...defaultOptions, animationData: menuIcon}}
              speed={2}
              direction={menuState.direction}
              height={50}
              width={50}
              isStopped={menuState.isStopped}
              isPaused={menuState.isPaused}
          />
        </button>

      </div>
      
      { showMenu && (
        <motion.div
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              }
            },
          }}
          initial="hidden"
          animate="visible"
          className="flex lg:hidden h-full justify-center items-center"
        >
            
          <div className="flex flex-col justify-between w-full items-center">
            <motion.button
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1 mt-8"
              onClick={() => { handleClickMenu('')}}
            >Inicio</motion.button>

            <motion.button
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1"
              onClick={() => { handleClickMenu('nossa_historia')}}
            >Nossa Historia</motion.button>

            <motion.button
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1"
              onClick={() => { handleClickMenu('corpo_docente')}}
            >Corpo Docente</motion.button>

            <motion.button
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1"
              onClick={() => { handleClickMenu('modalidades')}}
            >Modalidades</motion.button>

            <motion.button
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1"
              onClick={() => { handleClickMenu('galeria_de_fotos')}}
            >Galeria de Fotos</motion.button>

            <motion.button 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="p-2 my-1 mb-8"
              onClick={() => { handleClickMenu('contato')}}
            >Contato</motion.button>

            <motion.div
              variants={{
                hidden: { y: -20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="flex justify-around w-full mb-4"
            >
              <FaInstagramSquare className="cursor-pointer" onClick={handleInstagram} color="#9E251F" size={30} />
              <FaFacebookF className="cursor-pointer" onClick={handleFacebook}  color="#9E251F" size={30} />
              <FaYoutube className="cursor-pointer" onClick={handleYoutube} color="#9E251F" size={30} />
            </motion.div>

            <div className="h-screen"/>

          </div>
        </motion.div>
      )}

    </header>
  )
}

export default Header;