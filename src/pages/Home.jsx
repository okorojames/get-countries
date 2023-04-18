import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const [search, setSearch] = useState();
  const [countries, setCountries] = useState();
  const navigate = useNavigate();
  async function getCountries() {
    const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
    const data = await res.json();
    setCountries(data);
    console.log(data);
    if (data.status === 404) {
      navigate("/404");
    }
  }
  function getCountry(e) {
    e.preventDefault();
    if (search === "") {
      setCountries(null);
    } else {
      getCountries();
    }
  }

  return (
    <div className="home--section">
      <form className="search--country--form" onKeyUp={getCountry}>
        <input
          type="text"
          placeholder="search country"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link type="submit">Search</Link>
      </form>
      {/* displaying the country few data */}
      <div className="country--row">
        {countries &&
          countries.map((country, index) => (
            <Link to="/about" className="country" key={index}>
              <div className="country--image" style={{ marginBottom: "8px" }}>
                <img src={country.flags.png} alt="" className="country--img" />
              </div>
              <div
                className="country--name"
                style={{ alignSelf: "flex-start" }}
              >
                {country.name.common}
              </div>
              <div
                className="country--region"
                style={{ color: "#fff", alignSelf: "flex-start" }}
              >
                Region:{" "}
                <span
                  style={{ opacity: ".6", fontSize: "18px", marginLeft: "4px" }}
                >
                  {country.region}
                </span>
              </div>
              <div
                className="country--borders"
                style={{ color: "#fff", alignSelf: "flex-start" }}
              >
                Border / s:
                {country.borders &&
                  country.borders.map((border) => (
                    <span
                      style={{
                        opacity: ".6",
                        fontSize: "16px",
                        marginLeft: "4px",
                      }}
                    >
                      {`${border},`}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
