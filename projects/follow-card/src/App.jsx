import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    initialIsFollowing: true
  },
  {
    userName: 'estebandev',
    name: 'Esteban Villamizar',
    initialIsFollowing: true
  },
  {
    userName: 'holamundo',
    name: 'Hola mundo',
    initialIsFollowing: false
  },
  {
    userName: 'mafezabala',
    name: 'Fernanda Zabala Arciniegas',
    initialIsFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, initialIsFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollow={initialIsFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
