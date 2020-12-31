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

interface ButtonProps {
  text: string;
  href: string;
  layoutId: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, layoutId }) => {
  return(
    <motion.div layoutId={layoutId} className="my-3">
      <Link href={href}>
        <a className="text-white p-2 m-1 rounded-lg bg-red-900 hover:bg-red-600">
          {text}
        </a>
      </Link>
    </motion.div>
  )
}

const Danca: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        style={{backgroundImage: `url(/assets/home/danca.webp)`}}
        className="flex items-center h-60 w-full bg-cover bg-center bg-no-repeat rounded-xl"
        layoutId={"danca-mais"}
      >
        <div className="flex justify-center bg-white w-full bg-opacity-60">
          <h1 className="text-center py-1 font-bold text-5xl">DANÇA</h1>
        </div>
      </motion.div>

      <div>
        <Paragraph
          text='Coreografias baseadas e adaptadas em alguns musicais da Broadway, explorando os mais variados estilos de dança e enfatizando a interpretação, com o intuito de estimular a autoestima, o potencial dos alunos e melhorar a capacidade e as habilidades sociais dos alunos.'
        />
        <Paragraph
          text='Através dos musicais escolhidos, como tema de estudo, nos aprofundamos em seu estilo, época em que foi inspirado, nas técnicas de dança e interpretação utilizadas na montagem original. Finalizando o aprendizado com as coreografias para o espetáculo de encerramento do curso.'
        />
        <div className="flex flex-col items-center">
          <Button layoutId="danca-mais-jazz" href='/saibamais/danca/jazz' text='Jazz' />
          <Button layoutId="danca-mais-ballet" href='/saibamais/danca/jazz' text='Ballet Clássico' />
          <Button layoutId="danca-mais-hiphop" href='/saibamais/danca/jazz' text='Hip Hop' />
          <Button layoutId="danca-mais-irlandesa" href='/saibamais/danca/jazz' text='Dança Irlandesa' />
          <Button layoutId="danca-mais-contemporaneo" href='/saibamais/danca/jazz' text='Contemporâneo' />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <h1 className="text-lg font-bold text-white p-2 border-b-2">OS BENEFÍCIOS DA DANÇA</h1>
        <Paragraph
          text="A dança traz ao ser humano inúmeros benefícios como os terapêuticos, culturais, sociais, educacionais e físicos. Como em toda atividade física o cérebro libera serotonina, substância que traz a sensação de alívio, melhorando o humor e o sono."
        />
        <Paragraph
          text="Ela pode ser praticada como um exercício físico, como uma atividade de integração social ou como uma atividade de lazer."
        />
        <Paragraph
          text="Dançar é uma atividade comprovadamente terapêutica, faz bem ao corpo, ao coração e à mente e, não demanda nada mais do que tempo e disposição."
        />
        <Paragraph
          text="Além disso, a dança é uma atividade física para todas as pessoas, sem distinção de sexo, raça e idade. Uma prática fundamental para a saúde."
        />
        <Paragraph
          text="Confira alguns dos benefícios proporcionados pela dança:"
        />
        <ul className="w-full text-white px-4">
          <li>- Queima calorias.</li>
          <li>- Aumenta o condicionamento físico.</li>
          <li>- Fortalece toda a musculatura corporal.</li>
          <li>- Fortalece os ossos evitando a perda óssea (osteoporose).</li>
          <li>- Aumenta a frequência cardíaca, ajudando o coração a bombear mais sangue para o corpo e para os músculos.</li>
          <li>- Aumenta a frequência respiratória.</li>
          <li>- Libera serotonina e endorfina (neurotransmissores que liberam prazer)</li>
          <li>- Reduz as dores.</li>
          <li>- Proporciona prazer e bom humor.</li>
          <li>- Melhora o aprendizado e a disciplina.</li>
          <li>- Retarda o envelhecimento.</li>
          <li>- Melhora a autoestima.</li>
          <li>- Melhora a sensualidade, o ritmo, a flexibilidade, a agilidade e a coordenação motora.</li>
        </ul>

        <Paragraph
          text="Em pouco tempo, nota-se que os benefícios vão muito além do bem-estar físico."
        />

        <Paragraph
          text="Aos poucos, assim que a pessoa começa a dançar, já sente uma transformação interna, que logo será perceptível externamente. É de dentro para fora que o ser humano se transforma."
        />

        <Paragraph
          text="Todos os passos de dança podem ser adaptados frente às limitações físicas de cada pessoa tornando a prática da dança um prazer e uma diversão."
        />

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
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

export default Danca;