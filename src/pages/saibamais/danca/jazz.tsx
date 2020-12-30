import { motion } from "framer-motion"
import Link from "next/link";

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

const Danca: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="flex items-center h-12 w-full bg-cover bg-center bg-no-repeat rounded-xl"
        layoutId={"danca-mais-jazz"}
      >
        <div className="flex justify-center w-full">
          <h1 className="text-center py-1 font-bold rounded-xl text-5xl px-12 bg-white bg-opacity-60">JAZZ</h1>
        </div>
      </motion.div>

      <div className="flex flex-col items-center mt-4">
        <Paragraph
          text="Nossas aulas de Jazz são constituídas por movimentos coreografados com base na criação livre, usando os princípios do ballet clássico, passando pelo ballet moderno, e dança contemporânea."
        />

        <Paragraph
          text="Nós trabalhamos com lyrical jazz, jazz musical e jazz dance tradicional."
        />

        <Paragraph
          text="Esta modalidade abrange uma forma de dança extremamente atual, intimamente ligada à expansão comercial da dance music."
        />

        <Paragraph
          text="Nesta aula, os alunos trabalham alongamento, força muscular, coordenação motora, musicalidade, postura e muita animação –, pode ser feita por pessoas de ambos os sexos, e é indicada para qualquer idade, a partir dos 6 anos."
        />

        <Paragraph
          text="A prática do jazz dance traz diversos benefícios aos alunos tais como melhorar a postura, contribui para o aumento da flexibilidade e alongamento muscular, aumento da força muscular, desenvolve a coordenação motora, ritmo e musicalidade, socialização, memorização, melhora a autoestima, contribui para um físico saudável e a mente tranquila, combatendo o estresse."
        />

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
      >
        <Link href="/saibamais/danca">
        <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
            Voltar para o Dança
          </a>
        </Link>
      </motion.div>
    </div>
  )
};

export default Danca;