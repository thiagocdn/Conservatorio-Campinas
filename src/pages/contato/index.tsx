import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import instagramLottie from './assets/instagram.json';
import facebookLottie from './assets/facebook.json';
import whatsappLottie from './assets/whatsapp.json';
import emailLottie from './assets/email.json';
import Lottie from "react-lottie";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return(
    <p className="w-full text-white p-4 text-center text-lg" style={{textIndent: '20px'}}>
      {text}
    </p>
  )
}

const Contato: React.FC = () => {
  const [ instagramState, setInstagramState] = useState({
    isStopped: true, isPaused: false,
  });
  const [ facebookState, setFacebookState] = useState({
    isStopped: true, isPaused: false,
  });
  const [ whatsappState, setWhatsappState] = useState({
    isStopped: true, isPaused: false,
  });
  const [ emailState, setEmailState] = useState({
    isStopped: true, isPaused: false,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function handleInstagram() {
    setInstagramState({
      ...instagramState,
      isStopped: false,
    });
    setTimeout(() => {
      setInstagramState({
        ...instagramState,
        isStopped: true,
      });
      window.open("https://www.instagram.com/conservatoriocampinas/");
    }, 1000);
  }

  function handleFacebook() {
    setFacebookState({
      ...facebookState,
      isStopped: false,
    });
    setTimeout(() => {
      setFacebookState({
        ...facebookState,
        isStopped: true,
      });
      window.open("https://www.facebook.com/conservatoriocampinas");
    }, 1000);
  };

  function handleEmail() {
    setEmailState({
      ...emailState,
      isStopped: false,
    });
    setTimeout(() => {
      setEmailState({
        ...emailState,
        isStopped: true,
      });
      window.open("mailto:contato@conservatoriocampinas.com");
    }, 1500);
  }
  
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-full bg-gray-100 bg-opacity-10"
        initial={{ height: 0 }}
        animate={{ height: 80 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <h1 className="px-4 py-2 text-gray-100 text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold tracking-tight">
          Contato
        </h1>
      </motion.div>

      <Paragraph text="Você pode entrar em contato conosco através dos telefones:"/>
      <div className="bg-gray-900 shadow-md bg-opacity-40 px-4 pb-6 mt-4 sm:px-8 rounded-xl">
        <h1 className="text-white p-4 font-bold text-xl">(19) 3271-4748</h1>
        <h1 className="text-white px-4 font-bold text-xl">(19) 3383-2687</h1>
      </div>
      <Paragraph text="... ou pelas nossas redes sociais e via e-mail:"/>



      <div>
          <div
            className="flex flex-col my-4 pb-4 sm:flex-row sm:pb-0 shadow-md rounded-xl bg-gray-900 bg-opacity-40  justify-center sm:justify-start items-center cursor-pointer"
            onClick={handleInstagram}
          >
            <div>
              <Lottie options={{
                  ...defaultOptions,
                  animationData: instagramLottie,
                }}
                speed={2}
                height={90}
                width={90}
                isStopped={instagramState.isStopped}
                isPaused={instagramState.isPaused}
                style={{margin: '0px', zIndex: -1}}
              />
            </div>
            <h3 className="font-bold -mt-4 sm:mt-0 sm:pr-4 text-white">
              @conservatoriocampinas
            </h3>
          </div>


          <div
            className="flex flex-col my-4 pb-4 sm:flex-row sm:pb-0 shadow-md rounded-xl bg-gray-900 bg-opacity-40  justify-center sm:justify-start items-center cursor-pointer"
            onClick={handleFacebook}
          >
            <div>
              <Lottie options={{
                  ...defaultOptions,
                  animationData: facebookLottie,
                }}
                speed={2}
                height={90}
                width={90}
                isStopped={facebookState.isStopped}
                isPaused={facebookState.isPaused}
                style={{margin: '0px', zIndex: -1}}
              />
            </div>
            <h3 className="font-bold -mt-4 sm:mt-0 sm:pr-4 text-white">
              /conservatoriocampinas
            </h3>
          </div>


          <div
            className="flex flex-col my-4 pb-4 sm:flex-row sm:pb-0 shadow-md rounded-xl bg-gray-900 bg-opacity-40  justify-center sm:justify-start items-center cursor-pointer"
            onClick={handleEmail}
          >
            <div>
              <Lottie options={{
                  ...defaultOptions,
                  animationData: emailLottie,
                }}
                speed={3}
                height={90}
                width={90}
                isStopped={emailState.isStopped}
                isPaused={emailState.isPaused}
                style={{margin: '0px', zIndex: -1}}
              />
            </div>
            <h3 className="font-bold px-4 sm:px-0 -mt-4 sm:mt-0 sm:pr-4 text-white text-sm">
              contato@conservatoriocampinas.com
            </h3>
          </div>
        </div>


    </div>
  )
};

export default Contato;