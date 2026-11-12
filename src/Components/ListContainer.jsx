const ListContainer = ({data}) => {
  return (
    <>
    <section id="studentlist">
      (data.map((student) =(
        <article key={student.Id} className="List-item">
          <h1>{student.name}</h1>
          <p>SR Code: {student.srcode}</p>
          <p>Program: {student.program}</p>
          <button>Delete</button>
        </article>
      )))
      </section></>
  )
}   
export default ListContainer;