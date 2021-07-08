import { SearchParam, User } from '../../types'

interface SearchPanelProps {
  persons: User[]
  param: SearchParam
  setParma: (param: SearchParam) =>void
}

export default function SearchPanel({ persons, param, setParma }: SearchPanelProps) {
  return (
    <div>
      <input type="text" value={param.projectName} />
      <select value={param.personId}>
        {persons.map((user) => <option value={user.id}>{user.name}</option>)}
      </select>
    </div>
  )
}
