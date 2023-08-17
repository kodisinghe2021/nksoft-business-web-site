import React from 'react'
import Back from '../../components/common/back/Back'
import TeamCard from './TeamCard'
import Awrapper from '../../components/about/AWrapper'
import './team.scss'

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team