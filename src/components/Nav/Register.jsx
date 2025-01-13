import React from 'react'
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function Register(props) {
  const {handleSubmit} = props

  return (
    <div>
      <>
      <h1 className="text-center">Login or Register</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            marginTop: "150px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputGroup className="mb-3" style={{ width: "20%" }}>
            <FormControl
              placeholder="E-mail"
              aria-label="E-mail"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "20%" }}>
            <FormControl
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
              type='password'
            />
          </InputGroup>
          <InputGroup className="mb-3" style={{ width: "20%" }}>
            <FormControl
              placeholder="name"
              aria-label="name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3" style={{ width: "20%" }}>
            <FormControl
              placeholder="last name"
              aria-label="last name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button type="submit">Register</Button>
        </form>
        </>
      </div>
  )
}
