import { motion } from "framer-motion";

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
          Nossa História
        </h1>
      </motion.div>

      <div>
        <Paragraph
          text="A Versátil Cia de Dança foi criada em fevereiro de 1991 por Lucieli Roberta Fernandes Cedran, bailarina, professora e coreógrafa formada em Educação Física pela PUC Campinas, que juntamente com Márcio Cedran dirigiram a academia até o ano de 2013 onde conquistaram o reconhecimento de seu trabalho pela qualidade técnica dos trabalhos apresentados ao longo desses 22 anos de história."
        />
        <Paragraph
          text="Em janeiro de 2014 surgiu a oportunidade de ampliar o trabalho e apostar em um novo desafio, a realização de um sonho, criar um espaço exclusivo para o aprendizado, formação e aperfeiçoamento de diferentes técnicas nas áreas da DANÇA, MÚSICA, ARTES CÊNICAS, CANTO E ARTES PLÁSTICAS, nasce então o CONSERVATÓRIO CAMPINAS com o compromisso de oferecer o que há de melhor em estrutura, metodologia, equipe de profissionais e um ambiente acolhedor onde é priorizado a amizade e a família ."
        />
      </div>

    </div>
  )
}
