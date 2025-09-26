import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function SearchBox({ value, onChange, onSubmit }) {
  return (
    <div className="mb-4" style={{paddingTop:70, paddingLeft:20}}>
      <Form>
        <InputGroup>
          <Form.Control placeholder="Search..." value={value} style={{minHeight:"56px" ,paddingRight:"70px"}} />
          <Button className="searchbox" style={{backgroundColor:"red", padding:"0 20px", 
            borderRadius:"5px"}}><img src="./images/imgi_22_search-icon-white.png" alt="" /></Button>
        </InputGroup>
      </Form>
    </div>
  );
}
