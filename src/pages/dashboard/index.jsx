import React from "react";
import { Breadcrumb, Container, Nav, Navbar, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import SButton from "../../components/Button";
import SNavbar from "../../components/Navbar";

const PageDashboard = () => {
  return (
      <Container className="mt-3">
        <SBreadCrumb />
        <SButton variant="primary">Tambah</SButton>
        <h1>Dashboard</h1>  
      </Container>
  );
};

export default PageDashboard;
