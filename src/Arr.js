import React from "react";
function Arr() {
  const students = [
    {
      name: "Rahul",
      id: 10,
      fullname: [{ fname: "rk" }, { mname: "kp" }, { surname: "patel" }],
    },
    {
      name: "Kamlesh",
      id: 20,
      fullname: [{ fname: "rk" }, { mname: "kp" }, { surname: "patel" }],
    },
    {
      name: "Dipak",
      id: 10,
      fullname: [{ fname: "rk" }, { mname: "kp" }, { surname: "patel" }],
    },
  ];
  //   const emp = [0, 1, 2, 3];
  //   students.map((e) => {
  //     console.log(e);
  //   });
  return (
    <div>
      <h1>Array or List in React js</h1>

      <table border="1">
        <tbody>
          <tr>
            <th> Name </th>
            <th> ID </th>
            <th> FullName </th>
          </tr>
          {students.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.id}</td>
              <td>
                <table>
                  <tbody>
                    {e.fullname.map((s) => (
                      <tr key={i}>
                        <td>
                          {s.fname}
                          {s.mname}
                          {s.surname}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Arr;
