import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import ballerina from './assets/ballerina.json';


interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  name: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, position }) => {
  return (
    <Link href={href}>
      <motion.div
        layoutId={layoutId}
      >
        <div className="relative bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
          <img
            className="w-full rounded-xl hover:opacity-90"
            src={imgSrc}
            />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-center text-sm text-gray-100 font-bold mt-1">{name}</span>
          <span className="text-center text-xs text-gray-200 ">{position}</span>
        </div>
      </motion.div>
    </Link>
  )
}

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return(
    <p className="w-full text-white p-4 text-justify" style={{textIndent: '20px'}}>
      {text}
    </p>
  )
}

export default function Home() {

  return (
    <div>
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
          Corpo Docente
        </h1>
      </motion.div>

      <div className="flex">
        <div className="flex flex-col justify-between items-center w-full lg:w-2/3">

          <div>
            <Paragraph
              text='Nossos profissionais são graduados, especializados, são educadores aptos a atender os objetivos, necessidades e limites do público infantil, juvenil, adulto e melhor idade.'
            />
            <Paragraph
              text='Nossos docentes desenvolvem e trabalham com um programa de ensino atualizado, contamos ainda com uma coordenadora pedagógica que está constantemente avaliando todo nosso trabalho.'
            />
          </div>

          <div className="flex flex-col items-center my-4">
            <Image
              className="shadow-md rounded-2xl"
              src='/assets/corpo_docente/lucieli_cedran.webp'
              height={250}
              width={250}
            />
            <span
              className="mt-2 text-sm font-bold text-gray-100"
            >Lucieli Fernandes Cedran</span>
          </div>

        </div>

        <div  className="w-1/3 hidden lg:flex">
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              },
              animationData: ballerina
            }}
            speed={2}
            isStopped={false}
            isPaused={false}
          />
        </div>
      </div>

      <div>

      <Paragraph
            text='Diretora residente do Conservatório Campinas é professora e coreógrafa de dança desde 1987.'
          />

          <Paragraph
            text='​Formada em Educação Física pela PUC-Campinas, iniciou na dança com 7 anos de idade no Conservatório Carlos Gomes, onde frequentou aulas de Ballet Clássico, Jazz, Sapateado Americano, Flamenco e Ballet Moderno.'
          />

          <Paragraph
            text='Foi bailarina da Opus Studio, Academia Corpo Livre, Studio Cristiane Matallo, Tap Studio.'
          />

          <Paragraph
            text='Em sua trajetória teve mestres como Anton Garcez, Claudia Dubard, Cristiane Matallo, Gioconda Sabá, Luciana Checcia, Luys Baldijão, Paulo Branco, Rita Donato, Rubén Terranova e Valkiria Coelho.'
          />

          <Paragraph
            text='Como diretora do atual Conservatório Campinas, antiga Versátil Cia.'
          />

          <Paragraph
            text='De Dança, dirigiu remontagens de espetáculos como Alladin, A Bela e a Fera, Hércules, Matilda, Wicked, Annie, Cinderella, O Mágico de Oz e produziu espetáculos de sua própria autoria, como A Magia dos Guardiões, O Reino de Atlântida, O Mundo da Dança, Luz Câmera Ação, Em Busca da Terra do Nunca, entre outros.'
          />

          <Paragraph
            text='Atualmente também organiza e dirige concertos de música, peças teatrais e mostras culturais.'
          />
      </div>

      <motion.div
        layoutId="team_bg"
        className="bg-gray-900 bg-opacity-40 px-4 pb-6 mt-8 sm:px-8 rounded-xl"
      >
      <Paragraph
          text="CONSERVATÓRIO CAMPINAS  conta com professores com alto nível de profissionalismo e conhecimento das técnicas de dança que lecionam. Conheça um pouco mais sobre cada professor e veja seu currículo completo:"
        />
        <div className="mt-2 md:mt-8 grid w-full gap-8 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
          
          <Card
            name="Daniel Faria"
            position="Coordenador de Iniciação Artistica e Professor de Circo e Teatro"
            href="/corpo_docente/daniel_faria"
            imgSrc="/assets/corpo_docente/daniel_faria.webp"
            layoutId="daniel_faria"
          />
          <Card
            name="Priscila Vargas"
            position="Coordenadora de Dança e Professora de Jazz"
            href="/corpo_docente/priscila_vargas"
            imgSrc="/assets/corpo_docente/priscila_vargas.webp"
            layoutId="priscila_vargas"
          />
          <Card
            name="Alex Lima"
            position="Professor de Contemporâneo"
            href="/corpo_docente/alex_lima"
            imgSrc="/assets/corpo_docente/alex_lima.webp"
            layoutId="alex_lima"
          />
          <Card
            name="Fernanda Dias"
            position="Professora de Jazz e Hip Hop"
            href="/corpo_docente/fernanda_dias"
            imgSrc="/assets/corpo_docente/fernanda_dias.webp"
            layoutId="fernanda_dias"
          />
          <Card
            name="Gabrielli Nascimento"
            position="Professora de Jazz"
            href="/corpo_docente/gabrielli_nascimento"
            imgSrc="/assets/corpo_docente/gabrielli_nascimento.webp"
            layoutId="gabrielli_nascimento"
          />
          <Card
            name="Giovanna Alves"
            position="Professora de Dança Irlandesa"
            href="/corpo_docente/giovanna_alves"
            imgSrc="/assets/corpo_docente/giovanna_alves.webp"
            layoutId="giovanna_alves"
          />
          <Card
            name="Mariana Tanibata"
            position="Professora de Jazz e Dança para Teatro Musical"
            href="/corpo_docente/mariana_tanibata"
            imgSrc="/assets/corpo_docente/mariana_tanibata.webp"
            layoutId="mariana_tanibata"
          />
          <Card
            name="Priscilla Soares"
            position="Professora de Sapateado Americano e Dança Irlandesa"
            href="/corpo_docente/priscilla_soares"
            imgSrc="/assets/corpo_docente/priscilla_soares.webp"
            layoutId="priscilla_soares"
          />
          <Card
            name="Auana Angeli"
            position="Professora de Tecido Acrobático"
            href="/corpo_docente/auana_angeli"
            imgSrc="/assets/corpo_docente/auana_angeli.webp"
            layoutId="auana_angeli"
          />
          <Card
            name="Simone Thibes"
            position="Professora de Artes Plásticas"
            href="/corpo_docente/simone_thibes"
            imgSrc="/assets/corpo_docente/simone_thibes.webp"
            layoutId="simone_thibes"
          />
          <Card
            name="Diógines Cândido"
            position="Professor de Canto e Violino"
            href="/corpo_docente/diogines_candido"
            imgSrc="/assets/corpo_docente/diogines_candido.webp"
            layoutId="diogines_candido"
          />
          <Card
            name="Leandro Gomes"
            position="Professor de Flauta Doce e Transversal"
            href="/corpo_docente/leandro_gomes"
            imgSrc="/assets/corpo_docente/leandro_gomes.webp"
            layoutId="leandro_gomes"
          />
          <Card
            name="Quilder de Paula"
            position="Professor de Violão, Canto, Piano, Contra-Baixo e Musicalização Infantil"
            href="/corpo_docente/quilder_paula"
            imgSrc="/assets/corpo_docente/quilder_paula.webp"
            layoutId="quilder_paula"
          />
          <Card
            name="Samuel Valli"
            position="Professor de Canto e Técnica Vocal"
            href="/corpo_docente/samuel_valli"
            imgSrc="/assets/corpo_docente/samuel_valli.webp"
            layoutId="samuel_valli"
          />
          <Card
            name="Yuri Zanotti"
            position="Professor de Piano e Teclado"
            href="/corpo_docente/yuri_zanotti"
            imgSrc="/assets/corpo_docente/yuri_zanotti.webp"
            layoutId="yuri_zanotti"
          />
          <Card
            name="Dirceu de Carvalho"
            position="Professor de Teatro"
            href="/corpo_docente/dirceu_carvalho"
            imgSrc="/assets/corpo_docente/dirceu_carvalho.webp"
            layoutId="dirceu_carvalho"
          />
          <Card
            name="Anderson Ramos"
            position="Professor de Saxofone"
            href="/corpo_docente/anderson_ramos"
            imgSrc="/assets/corpo_docente/anderson_ramos.webp"
            layoutId="anderson_ramos"
          />
          <Card
            name="Érika Carmo"
            position="Professora de Pilates"
            href="/corpo_docente/erika_carmo"
            imgSrc="/assets/corpo_docente/erika_carmo.webp"
            layoutId="erika_carmo"
          />
          <Card
            name="Letícia da Silva"
            position="Professora de Pilates"
            href="/corpo_docente/leticia_silva"
            imgSrc="/assets/corpo_docente/leticia_silva.webp"
            layoutId="leticia_silva"
          />
        </div>
      </motion.div>

    </div>
  )
}
