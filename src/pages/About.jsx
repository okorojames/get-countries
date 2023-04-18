import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const About = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountries] = useState();
  const [error, setError] = useState(false);
  async function getCountries() {
    const res = await fetch(`https://restcountries.com/v3.1/${name}`);
    const data = await res.json();
    setCountries(data);
    console.log(data);
    if (data.message === "Page Not Found") {
      setTimeout(() => {
        navigate("/404:No-Page-Found");
      }, 800);
    }
  }
  useEffect(() => {
    getCountries();
  }, []);
  return <div>About</div>;
};

export default About;
