import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Instruktioner" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Du har 6 försök att gissa dagens ord på 5 bokstäver. Brickorna byter färg efter varje gissning 
        beroende på om bokstäverna hamnat på rätt eller fel plats, eller om de inte finns med.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
        <Cell value="J" isCompleted={true} />
        <Cell value="Ä" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
        <Cell value="P" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Bokstaven H finns i ordet och är på rätt plats.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" isCompleted={true} />
        <Cell value="Ö" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
        <Cell value="S" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Bokstaven R finns i ordet, men är på fel plats.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="S" isCompleted={true} />
        <Cell value="V" isCompleted={true} />
        <Cell value="Å" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Bokstaven R hör inte hemma i ordet vi söker.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Spelet är baserad på Wordle av Josh Wardle.<br />Databasens ordlista är inhämtad från SAOLhist.<br />
      {' '}
        <a
          href="https://play.google.com/store/apps/details?id=io.ionic.ordfejd&hl=sv" target="_blank" rel="noreferrer"
          className="font-bold"
        >
          Spelet på Google Play kräver inte nätverk
        </a>{' '} ▶️
                {' '} 
        <a
          href="https://ordfejd.se/privacypolicy" target="_blank" rel="noreferrer"
          className="font-bold"
        >
           Kontakta oss
        </a>{' '} 🛜</p>
    </BaseModal>
  )
}
