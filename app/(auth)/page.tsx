import AddProductButton from "@/components/AddProductButton";
import CardContainer from "@/components/CardContainer";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <AddProductButton />
      <CardContainer />
    </>
  );
};

export default Home;
