import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
  name: string;
  position: string;
}

interface IProfessor {
  id: string;
  name: string;
  position: string;
  resume: string[];
}

interface ProfessorProps {
  professor: IProfessor;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId, name, position }) => {
  return (
    <Link href={href}>
      <motion.div
        initial={{ rotate: 0, }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 10
        }}
        layoutId={layoutId}
        className="w-40"
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


export default function Home({ professor }: ProfessorProps) {

  if (!professor) {
    return (
      <div>
        <h1>PROFESSOR NÃO ENCONTRADO!</h1>
      </div>
    )
  }

  return (
    <div>
      { professor.id && (
        <div className="flex flex-col sm:flex-row justify-center ">
          <div className="flex flex-col items-center">
            <Card
              name={professor.name}
              position={professor.position}
              href={`/corpo_docente/${professor.id}`}
              imgSrc={`/assets/corpo_docente/${professor.id}.webp`}
              layoutId={`${professor.id}`}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8"
            >
              <Link href="/corpo_docente">
                <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
                  Voltar
                </a>
              </Link>
            </motion.div>
          </div>

          <motion.div
            layoutId="team_bg"
            className="bg-gray-900 bg-opacity-40 mx-4 p-4 rounded-xl"
          >
            { professor.resume.map((item, index) => (
              <Paragraph
                key={`${professor.id}-${index}`}
                text={item}
              />
            )) }
          </motion.div>
        </div>
      )}
    </div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { professors } = await require('../../data');
  
  const paths = await professors.map((professor: IProfessor) => {
    return {
      params: {
        slug: professor.id
      }
    }
  });

  return {
    paths,
    fallback: true,
  }
};


export const getStaticProps: GetStaticProps<ProfessorProps> = async (context) => {
  const { slug } = context.params;
  const { professors } = await require('../../data');
  const professor = await professors.find((prof: IProfessor) => prof.id === slug);


  return {
    props: {
      professor
    },
    revalidate: 60,
   }
}
