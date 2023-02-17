import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    uuid: '0',
    userName: 'Ximena',
    name: 'Ximena Maria',
    initialIsFollowing: true,
    agency: 'Cele',
    qualification: '10/10'
  },
  {
    uuid: '1',
    userName: 'Daniela',
    name: 'Daniela Posada',
    initialIsFollowing: true,
    agen: 'Cele',
    qualification: '8/10'
  },
  {
    uuid: '2',
    userName: 'Marcela',
    name: 'Marcela',
    initialIsFollowing: true,
    agen: 'Erot',
    qualification: '10/10'
  },
  {
    uuid: '3',
    userName: 'Jessica',
    name: 'Jessica Fuentes',
    initialIsFollowing: true,
    agen: 'Cele',
    qualification: '4/10'
  },
  {
    uuid: '4',
    userName: 'Sara',
    name: 'Sara Duarte',
    initialIsFollowing: true,
    agen: 'Cele',
    qualification: '5/10'
  },
  {
    uuid: '5',
    userName: 'Evelying',
    name: 'Evelying',
    initialIsFollowing: true,
    agen: 'Cele',
    qualification: '10/10'
  },
  {
    uuid: '6',
    userName: 'Valeria',
    name: 'Alice Aguirre',
    initialIsFollowing: true,
    agen: 'Erot',
    qualification: '10/10'
  },
  {
    uuid: '7',
    userName: 'Yuri',
    name: 'Natalia Gonzalez',
    initialIsFollowing: true,
    agen: 'Erot',
    qualification: '10/10'
  },
  {
    uuid: '8',
    userName: 'Maria',
    name: 'Lucero Rojas',
    initialIsFollowing: true,
    agen: 'Cele',
    qualification: '6/10'
  },
  {
    uuid: '9',
    userName: 'Emma',
    name: 'Bertha Leonor',
    initialIsFollowing: true,
    agen: 'NyS',
    qualification: '10/10'
  }
]

export default function App() {
  return (
    <section className='App'>
      {users.map((user) => {
        const { name, userName, initialIsFollowing, uuid } = user
        return (
          <TwitterFollowCard userName={userName} initialIsFollowing={initialIsFollowing} key={uuid}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
