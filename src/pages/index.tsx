import { motion } from "framer-motion";
import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SEO from "../components/SEO";


interface CardProps {
  href: string;
  name: string;
  list?: string[];
  imgSrc: string;
  layoutId: string;
}

const CardRight: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, list }) => {
  return (
    <Link href={href}>
      <div className="flex relative shadow-md bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-50 transition">
        <motion.div
          style={{backgroundImage: `url(${imgSrc})`}}
          className="flex items-center w-1/2 bg-cover bg-center bg-no-repeat rounded-l-2xl"
          layoutId={layoutId}
        >
          <div className="flex justify-center bg-white w-full bg-opacity-60">
            <h1 className="text-center py-1 font-bold">{name}</h1>
          </div>
        </motion.div>
        <div  className="grid grid-cols-1 w-1/2 py-2">
          { list.map(item => <span key={item} className="text-center">{item}</span>) }
        </div>

        <a className="absolute bottom-2 left-2 bg-gray-900 text-gray-50 px-1 py-1 text-sm font-semibold rounded-md hover:bg-gray-700 transition">
          Saiba mais
        </a>

      </div>
    </Link>
  )
}

const CardLeft: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, list }) => {
  return (
    <Link href={href}>
      <div className="flex relative shadow-md bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-50 transition">      
        <div  className=" grid grid-cols-1 w-1/2 py-2">
          { list.map(item => <span key={item} className="text-center">{item}</span>) }
        </div>
        <motion.div
          style={{backgroundImage: `url(${imgSrc})`}}
          className="flex items-center w-1/2 bg-cover bg-center bg-no-repeat rounded-r-2xl"
          layoutId={layoutId}
        >
          <div className="flex justify-center bg-white w-full bg-opacity-60">
            <h1 className="text-center py-1 font-bold">{name}</h1>
          </div>
        </motion.div>


        <a className="absolute bottom-2 right-2 bg-gray-900 text-gray-50 px-1 py-1 text-sm font-semibold rounded-md hover:bg-gray-700 transition">
          Saiba mais
        </a>

      </div>
    </Link>
  )
}

const CardFull: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, list }) => {
  return (
    <Link href={href}>
      <div className="flex h-40 sm:h-52 md:h-full relative shadow-md bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-50 transition">
        <motion.div
          style={{backgroundImage: `url(${imgSrc})`}}
          className="flex items-center w-full bg-cover bg-center bg-no-repeat rounded-2xl"
          layoutId={layoutId}
        >
          <div className="flex justify-center bg-white w-full bg-opacity-60">
            <h1 className="text-center py-1 font-bold">{name}</h1>
          </div>
        </motion.div>


        <a className="absolute bottom-2 right-2 bg-gray-900 text-gray-50 px-1 py-1 text-sm font-semibold rounded-md hover:bg-gray-700 transition">
          Saiba mais
        </a>

      </div>
    </Link>
  )
}


export default function Home() {
  const carouselImages = [
    'image1.webp',
    'image2.webp',
    'image3.webp'
  ];


  const Map = dynamic(
    () => import('../components/Map'),
    {
      loading: () => <p>Carregando Mapa</p>,
      ssr: false
    }
  )

  return (
    <div>
      <SEO
        title="Conservatório Campinas - Website"
        shoudExcludeTitleSufix
        description="Consersatório de Artes na cidade de Campinas SP contando com uma infraestrutura completa para o desenvolvimento de Danças, Músicas, Artes Cênicas, Canto, Artes Plásticas, entre outros. Venha nos conhecer!"
      />

      <div>
        <Carousel showArrows={true} showThumbs={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
          { carouselImages.map((item) => {
            return (
            <div key={item} >
              <img src={`/assets/carousel/${item}`} />
            </div>
            )
          })}          
        </Carousel>
      </div>

      <div className="flex relative justify-center mt-8 w-full max-w-lg m-auto">
        <div className="absolute left-0 top-10 h-16 border-4 border-white w-1/3 h-" />
        <div className="absolute top-4 h-28 border-4 border-white w-1/2 h-" />
        <div className="absolute right-0 top-0 h-16 border-4 border-white w-1/3 h-" />
        <Image src="/assets/home/arte.png" height={120} width={112} />
      </div>

      <div className="mt-8 md:mt-12 grid w-full gap-8 grid-cols-1 md:grid-cols-2">
        <CardRight
          name='DANÇA'
          list={['Jazz',
            'Ballet Clássico',
            'Hip Hop',
            'Street Dance',
            'Dança Irlandesa',
            'Contemporâneo']}
          href="/saibamais/danca"
          imgSrc="/assets/home/danca.webp"
          layoutId="danca-mais"
        />
        <CardLeft
          name='MÚSICA'
          list={['Piano / Teclado',
            'Violão / Guitarra',
            'Violino',
            'Cavaquinho',
            'Contrabaixo',
            'Flauta',
            'Bateria',
            'Canto / Coral',
          ]}
          href="/saibamais/musica"
          imgSrc="/assets/home/musica.webp"
          layoutId="musica-mais"
        />
        <CardRight
          name='INICIAÇÃO ARTÍSTICA'
          list={['Teatro',
            'Música / Coral',
            'Expressão Corporal',
            'Circo',
            'Aéreos / Tecido / Lira',
            'Trapézio',
            'Artes Plásticas',
          ]}
          href="/saibamais/iniciacaoartistica"
          imgSrc="/assets/home/artistica.webp"
          layoutId="artistica-mais"
        />
        <CardFull
          name='PILATES'
          list={['Pilates']}
          href="/saibamais/pilates"
          imgSrc="/assets/home/pilates.webp"
          layoutId="pilates-mais"
        />
      </div>

      <div className="mt-12">
        <div className="flex justify-center p-2" style={{background: '#3C0A08'}}>
          <h1 className="text-white text-2xl md:text-3xl font-bold">NOSSA LOCALIZAÇÃO</h1>
        </div>
        <Map />
      </div>

    </div>
  )
}
