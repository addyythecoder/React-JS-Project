// src/components/Sidebar/SocialLinks.jsx
import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mb-4" style={{paddingTop: '20px', paddingLeft:20}}>
      <h4 style={{padding:"0 0 20px"}}>Follow Us</h4>
      <div className="d-flex gap-2 socialIcons">
        <Button size="sm" variant="outline-primary"><FaFacebookF /></Button>
        <Button size="sm" variant="outline-danger"><FaPinterestP /></Button>
        <Button size="sm" variant="outline-info"><CiTwitter /></Button>
        <Button size="sm" variant="outline-warning"><FaInstagram /></Button>
      </div>
    </div>
  );
}
