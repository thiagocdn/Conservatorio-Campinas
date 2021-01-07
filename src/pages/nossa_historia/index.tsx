import { motion } from "framer-motion";
import { useState } from "react";

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

const ParagraphBlack: React.FC<ParagraphProps> = ({ text }) => {
  return(
    <p className="w-full text-black text-justify px-2 mt-1" style={{textIndent: '20px'}}>
      {text}
    </p>
  )
}

interface ButtonProps {
  text: string;
  setModal: Function;
  modal: string;
}

const Button: React.FC<ButtonProps> = ({ text, setModal, modal }) => {
  return(
    <motion.button
      onClick={() => setModal(modal)}
      whileHover={{
        scale: 1.1
      }}
      className="bg-black bg-opacity-20 text-white font-bold text-lg px-2 py-5 rounded-xl"
    >
      {text}
    </motion.button>
  )
}


interface ModalProps {
  title: string;
  text: string[];
  setModal: Function;
}

const Modal: React.FC<ModalProps> = ({ title, text, setModal }) => {
  return(
    <>
      <div className="flex justify-between items-center p-2">
        <h1
          className="text-md font-bold bg-red-900 bg-opacity-10 p-2 rounded-md"
        >{title}</h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
        <button
          onClick={() => { setModal('') }}
          className="bg-gray-900 text-gray-50 border-none px-2 py-0 text-lg font-semibold rounded-xl hover:bg-gray-700 transition"
        >
          Fechar
        </button>
        </motion.div>
      </div>
      { text.map(text => (
        <ParagraphBlack
          text={text}
        />
      )) }
    </>
  )
}


export default function Home() {
  const [ modal, setModal ] = useState('');

  return (
    <div>
      { modal !== '' && (
        <div
          onClick={ () => {setModal('') }}
          className="z-50 fixed w-full h-full bg-white bg-opacity-50 top-0 left-0 px-2 py-4 sm:pt-24 sm:px-4 md:pt-28 ">
          <div
            onClick={ () =>  {}}
            className="w-full m-auto max-w-5xl bg-gray-100 border-4 border-red-900 p-2 rounded-xl">
            { modal === 'proposta_pedagogica' && (
              <Modal
                title="PROPOSTA PEDAGÓGICA"
                setModal={setModal}
                text={[
                  'Nossa proposta pedagógica consiste em fomentar a formação global e artística dos alunos através da integração entre as diversas áreas do conhecimento, saberes e linguagens artísticas.',
                  'Todos os projetos, metodologia e práticas pedagógicas foram reformuladas, direcionadas com as atuais tendências educacionais e profissionais para que possamos oferecer aos nossos alunos um ensino artístico de qualidade e excelência.',
                  'Nossa metodologia também está voltada para o desenvolvimento da disciplina, socialização, amizade, regaste da auto estima, contribuindo para o crescimento do indivíduo em todos os aspectos da sua vida.'
                ]}
              />
            )}
            { modal === 'estrutura_fisica' && (
              <Modal
                title="ESTRUTURA FÍSICA"
                setModal={setModal}
                text={[
                  'O CONSERVATÓRIO CAMPINAS está instalado em uma área de 850 mts totalmente reformado, adaptado para cada curso ministrado, são 12 salas de aulas divididas 5 para dança, tecido acrobático e artes cênicas, 4 música e canto, 1 artes plástica, 1 aula teórica e 1 studio pilates. Contamos ainda com estacionamento próprio, sistema de segurança interno, escritório, vestiário feminino, 5 sanitários, 1 café, 1 loja de roupas, recepção e sala de espera.',
                ]}
              />
            )}
          </div>
        </div>
      )}
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

      <div className="mb-2">
        <Paragraph
          text="A Versátil Cia de Dança foi criada em fevereiro de 1991 por Lucieli Roberta Fernandes Cedran, bailarina, professora e coreógrafa formada em Educação Física pela PUC Campinas, que juntamente com Márcio Cedran dirigiram a academia até o ano de 2013 onde conquistaram o reconhecimento de seu trabalho pela qualidade técnica dos trabalhos apresentados ao longo desses 22 anos de história."
        />
        <Paragraph
          text="Em janeiro de 2014 surgiu a oportunidade de ampliar o trabalho e apostar em um novo desafio, a realização de um sonho, criar um espaço exclusivo para o aprendizado, formação e aperfeiçoamento de diferentes técnicas nas áreas da DANÇA, MÚSICA, ARTES CÊNICAS, CANTO E ARTES PLÁSTICAS, nasce então o CONSERVATÓRIO CAMPINAS com o compromisso de oferecer o que há de melhor em estrutura, metodologia, equipe de profissionais e um ambiente acolhedor onde é priorizado a amizade e a família ."
        />
      </div>
      
      <div className="border-4 shadow-md rounded-xl bg-black bg-opacity-20">
        <h1 className="px-4 py-2 mt-4 text-gray-100 text-xl sm:text-3xl border-b-2 leading-none font-extrabold tracking-tight">
          CONSERVATÓRIO CAMPINAS
        </h1>
        <Paragraph
          text="Em janeiro de 2014 surgiu a oportunidade de ampliar o trabalho e apostar em um novo desafio, a realização de um sonho, criar um espaço exclusivo para o aprendizado, formação e aperfeiçoamento de diferentes técnicas nas áreas da DANÇA, MÚSICA, ARTES CÊNICAS, CANTO E ARTES PLÁSTICAS, nasce então o CONSERVATÓRIO CAMPINAS com o compromisso de oferecer o que há de melhor em estrutura, metodologia, equipe de profissionais e um ambiente acolhedor onde é priorizado a amizade e a família ."
        />
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="grid w-full self-auto justify-center gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, 250px)'}}>
          <Button
            setModal={setModal}
            modal="proposta_pedagogica"
            text="PROPOSTA PEDAGÓGICA"
          />
          <Button
            setModal={setModal}
            modal="estrutura_fisica"
            text="ESTRUTURA FÍSICA"
          />
          <Button
            setModal={setModal}
            modal="proposta_pedagogica"
            text="NOSSA VISÃO"
          />
          <Button
            setModal={setModal}
            modal="proposta_pedagogica"
            text="NOSSA MISSÃO"
          />
          <Button
            setModal={setModal}
            modal="proposta_pedagogica"
            text="NOSSOS VALORES"
          />
        </div>
      </div>

    </div>
  )
}
