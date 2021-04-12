import React from 'react';
import SmallButton from './SmallButton';

const Break = () => {
    return (
      <>
        <h2>05:00</h2>
        <SmallButton 
          className='stopBtn button'
          onClick={console.log('clicked')}
          title='Stop'
        />
        <SmallButton 
          className='resetBtn button'
          onClick={console.log('clicked')}
          title='Reset'
        />
      </>
    )
}

export default Break;