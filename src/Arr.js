import React from "react";
function Arr() {
  const students = [
    { name: "Rahul", id: 10 },
    { name: "Kamlesh", id: 20 },
    { name: "Dipak", id: 30 },
  ];
  //   const emp = [0, 1, 2, 3];
  //   students.map((e) => {
  //     console.log(e);
  //   });
  return (
    <div>
      <h1>Array or List in React js</h1>

      <table border="1">
        <tr>
          <th> Name </th>
          <th> ID </th>
        </tr>
        {students.map((e) => (
          <tr>
            <td>{e.name}</td>
            <td>{e.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Arr;
