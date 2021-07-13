import { Project } from '../index'

export interface ProjectListProps {
  projectList: Project[]
}

function ProjectList({ projectList }: ProjectListProps) {
  const createRow = ({ id, projectName, personId }: Project) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{projectName}</td>
      <td>{personId}</td>
    </tr>
  )
  return (
    <table width="40%">
      <tbody>
        <tr>
          <th>id</th>
          <th>projectName</th>
          <th>perosn</th>
        </tr>
        {projectList.map((project) => createRow(project))}
      </tbody>
    </table>
  )
}

export default ProjectList
