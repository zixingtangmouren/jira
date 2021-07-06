import { useState } from 'react'
import { useMount } from '../../hooks/useMount'
import { User } from '../types'

const PATH_URL = process.env.REACT_APP_PATH_URL

export default function ProjectList() {
  const [param, setParma] = useState({
    projectName: '',
    personId: '',
  })

  const [persons, setPersons] = useState<User[]>([])

  useMount(() => {
    fetch(`${PATH_URL}/users`).then(async (res) => {
      if (res.ok) {
        setPersons(await res.json())
      }
    })
  })

  // useEffect(() => {

  // }, [param])

  return <div />
}
