import React from "react";

export default function Profile(props) {
    const {form} = props
  return (
    <div className="d-flex justify-content-center flex-column mt-5 text-center">
      <h1>Profile</h1>
      {form.map((user)=>{
        return(
          <>
            <p className="mb-0">email: {user.email}</p>
            <p className="mb-0">Name: {user.name}</p>
            <p className="mb-0">Last Name: {user.lastName}</p>
          </>
        )
      })}
    </div>
  );
}
