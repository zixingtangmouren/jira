/*
 * @Author: tangzhicheng
 * @Date: 2021-07-13 14:12:33
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-07-13 14:50:39
 * @Description: file content
 */
import React from 'react'
import { Param, Person } from '..'

export interface SearchPanelProps {
  param: Param
  setParam: React.Dispatch<Param>
  personList: Person[]
}

function SearchPanel({ param, setParam, personList }: SearchPanelProps) {
  return (
    <div>
      <input
        type="text"
        value={param.projectName}
        onChange={(ev) =>
          setParam({
            ...param,
            projectName: ev.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(ev) => {
          setParam({
            ...param,
            personId: parseInt(ev.target.value),
          })
        }}>
        {personList.map((person) => (
          <option value={person.id} key={person.id}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchPanel
