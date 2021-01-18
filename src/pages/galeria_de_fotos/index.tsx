import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  name: string;
  year_name: string;
}

interface IPhotos {
  id: string;
  name: string;
  year_name: string;
  front_image: string;
}

interface PhotosProps {
  photosDataBase: IPhotos[];
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, year_name }) => {
  return (
    <Link href={href}>
      <motion.div
        layoutId={layoutId}
        whileHover={{scale: 1.05}}
        className="cursor-pointer bg-gray-900 bg-opacity-40 rounded-xl"
      >
        <div>
          <motion.div
            className="p-4"
          >
            <div className="flex flex-col items-center">
              <span className="text-center text-lg text-gray-100 font-medium mt-1">{name}</span>
              <span className="text-center text-sm text-gray-100 font-medium my-1">{year_name}</span>
            </div>
            <div className="rounded-xl cursor-pointer hover:bg-gray-50 transition">
              <img
                className="w-full rounded-xl h-60 object-cover"
                src={imgSrc}
                />
            </div>
          </motion.div>
        </div>

      </motion.div>
    </Link>
  )
}

export default function Home({ photosDataBase }: PhotosProps) {

  if(!photosDataBase){
    return(
      <div>
        <h1>ERRO NO SERVIDOR, TENTE NOVAMENTE MAIS TARDE.</h1>
      </div>
    )
  }

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
          Galeria de Fotos
        </h1>
      </motion.div>

          
      <div className="mt-8 md:mt-8 grid w-full gap-4 justify-center" style={{ gridTemplateColumns: 'repeat(auto-fill, 260px)'}}>
          
      { photosDataBase.map(album => (
        
        <Card
          key={album.id}
          name={album.name}
          year_name={album.year_name}
          href={`/galeria_de_fotos/${album.id}`}
          imgSrc={album.front_image}
          layoutId={`${album.id}`}
        />
      ))}

      </div>

    </div>
  )
}


export const getStaticProps: GetStaticProps<PhotosProps> = async (context) => {
  const { photosDataBase } = await require('../../data');
  
  return {
    props: {
      photosDataBase
    },
    revalidate: 600,
   }
}

