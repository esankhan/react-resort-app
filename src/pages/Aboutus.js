import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <Hero>
      <Banner title='About Us' subtitle='esankhan3@gmail.com'>
        <Link to='/' className='btn-primary'>
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Aboutus;
