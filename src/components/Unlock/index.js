import {useState} from 'react'
import {
  UnlockContainer,
  LockImage,
  MainHeading,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [unlock, setUnlock] = useState(false)

  const onClickLockButton = () => {
    setUnlock(prevState => !prevState)
  }

  return (
    <UnlockContainer>
      {unlock ? (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <MainHeading>Your Device is unLocked</MainHeading>
        </>
      ) : (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <MainHeading>Your Device is Locked</MainHeading>
        </>
      )}

      <LockButton onClick={onClickLockButton}>
        {unlock ? 'Lock' : 'unLock'}
      </LockButton>
    </UnlockContainer>
  )
}

export default Unlock
