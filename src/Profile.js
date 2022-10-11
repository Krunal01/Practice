import React, { useState } from "react";

function Profile() {
  const [loggedIn] = useState(3);
  return (
    <div>
      {loggedIn === 1 ? (
        <h1>loggedIn 1 </h1>
      ) : loggedIn === 2 ? (
        <h1>loggedIn 2</h1>
      ) : (
        <h1>User</h1>
      )}
    </div>
  );
}

export default Profile;
//   if (loggedIn) {
//     return (
//       <div>
//         <h1>loggedIn</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>loggedOut</h1>
//     </div>
//   );
