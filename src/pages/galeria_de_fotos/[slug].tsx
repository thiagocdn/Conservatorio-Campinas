import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import Link from "next/link";

interface IPhotos {
    caption?: string;
    src: string;
    width: number;
    height: number;
}

interface GalleryProps {
  id: string;
  name: string;
  year_name: string;
  photos: IPhotos[];
}


export default function Gallery_Photos(photos: GalleryProps | null) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  if (!photos || !photos.photos) {
    return (
      <div>
        <h1>GALERIA NÃO ENCONTRADA!</h1>
      </div>
    )
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
    
    <div className="mb-8 md:flex md:justify-between md:align-center">
      <div>
        <h1 className="text-4xl tracking-wide text-gray-50 font-bold">{photos.name}</h1>
        <h2 className="text-xl text-gray-100">{photos.year_name}</h2>
      </div>

      
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8"
        >
          <Link href="/galeria_de_fotos">
            <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
              Voltar
            </a>
          </Link>
      </motion.div>
    </div>

    <motion.div
      layoutId={photos.id}
      className="cursor-pointer bg-gray-900 bg-opacity-40 rounded-xl p-4 mt-4"
    >
      <Gallery photos={photos.photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel

              currentIndex={currentImage}
              views={photos.photos.map(x => ({
                ...x,
                source: x.src,
                srcset: x.src,
                caption: '',
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </motion.div>

      
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { photosDataBase } = await require('../../data');
  
  const paths = await photosDataBase.map((photos: GalleryProps) => {
    return {
      params: {
        slug: photos.id
      }
    }
  });

  return {
    paths,
    fallback: true,
  }
};


export const getStaticProps: GetStaticProps<GalleryProps> = async (context) => {
  const { slug } = context.params;
  const { photosDataBase } = await require('../../data');
  const photos = await photosDataBase.find((photos: GalleryProps) => photos.id === slug);


  return {
    props: {
      id: photos ? photos.id : null,
      name: photos ? photos.name : null,
      year_name: photos ? photos.year_name : null,
      photos: photos ? photos.photos : null,
    },
    revalidate: 60,
   }
}
