import React from 'react'

import Notes from './Notes';

export default function Home(props) {
  const {ShowAlert} = props;
  return (
    <div>
    <Notes ShowAlert={ShowAlert} />
    </div>
  )
}
