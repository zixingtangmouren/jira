import { useEffect, useState } from 'react'
import { cleanObject, paramshandle } from '../../utils/common'
import { useDebounce, useMount } from '../../utils/hooks'
import ProjectList from './components/ProjectList'
import SearchPanel from './components/SearchPanel'

const API_PATH = process.env.REACT_APP_API_PATH

export interface Person {
  name: string
  id: number
}

export interface Param {
  projectName?: string
  personId?: number
}

export interface Project {
  id: number
  projectName: string
  personId: number
}

function Screens() {
  const [param, setParam] = useState<Param>({
    projectName: undefined,
    personId: undefined,
  })

  const [personList, setPersonList] = useState<Person[]>([])

  const [projectList, setProjectList] = useState<Project[]>([])

  useMount(() => {
    fetch(`${API_PATH}/persons`).then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        setPersonList(data)
      }
    })
  })

  const debounceParam = useDebounce(param)

  useEffect(() => {
    fetch(`${API_PATH}/projectList${paramshandle(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          const data = await res.json()
          setProjectList(data)
        }
      },
    )
  }, [debounceParam])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} personList={personList} />
      <ProjectList projectList={projectList} />
    </div>
  )
}

export default Screens
