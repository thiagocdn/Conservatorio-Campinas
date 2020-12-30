import { motion } from "framer-motion"
import Link from "next/link";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return(
    <p className="text-white p-4 text-justify" style={{textIndent: '20px'}}>
      {text}
    </p>
  )
}

const IniciacaoArtistica: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        style={{backgroundImage: `url(/assets/home/artistica.webp)`}}
        className="flex items-center h-60 w-full bg-cover bg-center bg-no-repeat rounded-xl"
        layoutId={"artistica-mais"}
      >
        <div className="flex justify-center bg-white w-full bg-opacity-60">
          <h1 className="text-center py-1 font-bold text-5xl">INICIAÇÃO ARTÍSTICA</h1>
        </div>
      </motion.div>

      <div>
        <Paragraph
          text='Coreografias baseadas e adaptadas em alguns musicais da Broadway, explorando os mais variados estilos de dança e enfatizando a interpretação, com o intuito de estimular a autoestima, o potencial dos alunos e melhorar a capacidade e as habilidades sociais dos alunos.'
        />
        <Paragraph
          text='Através dos musicais escolhidos, como tema de estudo, nos aprofundamos em seu estilo, época em que foi inspirado, nas técnicas de dança e interpretação utilizadas na montagem original. Finalizando o aprendizado com as coreografias para o espetáculo de encerramento do curso.'
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
        <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Voltar para o Inicio
          </a>
        </Link>
      </motion.div>
    </div>
  )
};

export default IniciacaoArtistica;