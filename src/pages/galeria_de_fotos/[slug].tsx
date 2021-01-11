import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";

interface IPhotos {
    caption?: string;
    src: string;
    width: number;
    height: number;
}

interface GalleryProps {
  id: string;
  name: string;
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
      

    <div>
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
    </div>

      
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
      photos: photos ? photos.photos : null,
    },
    revalidate: 60,
   }
}
