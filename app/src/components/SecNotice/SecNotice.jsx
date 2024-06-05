import React from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import SecContent from './SecContent'
import Buttons from '../Buttons/Buttons'
import CloseSecNotice from './CloseSecNotice'

const SecNotice = () => {
  const [isClosed, setIsclosed] = useState(false)
  const handleClick = () => {
    setIsclosed(!isClosed)
  }

  return (
    <>
      <Buttons primary rounded onClick={handleClick}>
        click
      </Buttons>
      {isClosed && (
        <Modal onClose={handleClick}>{<SecContent />}</Modal>
      )}
    </>
  )
}
export default SecNotice
