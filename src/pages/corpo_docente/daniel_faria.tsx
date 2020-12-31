import { motion } from "framer-motion";
import Link from "next/link";

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


export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center ">
      <div className="flex flex-col items-center">
        <Card
          name="Daniel Faria"
          position="Coordenador de Iniciação Artistica e Professor de Circo e Teatro"
          href="/corpo_docente/daniel_faria"
          imgSrc="/assets/corpo_docente/daniel_faria.webp"
          layoutId="daniel_faria"
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
        className="bg-gray-900 bg-opacity-40 mx-4 p-4 md:p-8 rounded-xl"
      >
        <Paragraph
          text="Ator Autodidata, produtor Cultural e professor de Teatro e Circo."
        />
        <Paragraph
          text="Atualmente Coordenador do Projeto Expressão e arte do Conservatório Campinas e professor do projeto APAE Cultural apoiado pelo Ministério Da Cultura (MINC) e 8KA Produções."
        />
        <Paragraph
          text="Como ator no teatro e TV, participou de inúmeras montagens e também produziu diversos espetáculos teatrais."
        />
      </motion.div>
    </div>
  )
}
