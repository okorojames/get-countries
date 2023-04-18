import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import loaderGif from "/images/loader.gif";

const About = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function getCountries() {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    setCountry(data[0]);
    console.log(data);
    if (data) {
      setIsLoading(false);
    }
    if (data.message === "Page Not Found") {
      setTimeout(() => {
        navigate("/404:No-Page-Found");
      }, 800);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="about--section" style={{ position: "relative" }}>
      {isLoading && isLoading ? (
        <img
          src={loaderGif}
          style={{
            width: "200px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      ) : null}
      {country && (
        <div className="about--row">
          <img src={country.flags.png} alt="" className="about--country--img" />

          <div className="about--country--context">
            <div className="about--country--name" style={{ fontSize: "3rem" }}>
              {country.name.common}
            </div>
            <div
              className="about--country--capital"
              style={{
                color: "#ffff",
              }}
            >
              Capital:
              <span
                style={{
                  opacity: ".4",
                  letterSpacing: "1.4px",
                  marginLeft: "4px",
                }}
              >
                {country.capital}
              </span>
            </div>
            <div className="about--country--region" style={{ color: "#fff" }}>
              Region:
              <span
                style={{
                  opacity: ".6",
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {country.region}
              </span>
            </div>

            <div
              className="about--country--population"
              style={{ color: "#fff" }}
            >
              Population:
              <span
                style={{
                  opacity: ".6",
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {country.population}
              </span>
            </div>
            <div
              className="about--country--borders"
              style={{ color: "#fff", display: "flex", alignItems: "center" }}
            >
              <p>Borders:</p>
              <div
                style={{
                  opacity: ".6",
                  fontSize: "18px",
                  marginLeft: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {country.borders &&
                  country.borders.map((border) => <span>{`${border},`}</span>)}
              </div>
            </div>
            <div
              className="about--country--population"
              style={{ color: "#fff" }}
            >
              Sub Region:
              <span
                style={{
                  opacity: ".6",
                  fontSize: "18px",
                  marginLeft: "4px",
                }}
              >
                {country.subregion}
              </span>
            </div>
            <div
              className="about--country--population"
              style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p>Coat of Arm:</p>
              <img
                src={country.coatOfArms.png}
                className="country--coat--of--arm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
