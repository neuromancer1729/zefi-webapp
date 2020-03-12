import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection2 from "./../components/HeroSection2";

function AddFundsPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://i.imgur.com/bSRVe24.png"
      ></Navbar>
      <HeroSection2
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Add funds to your wallet"
        subtitle="..."
      ></HeroSection2>
    </>
  );
}

export default AddFundsPage;
