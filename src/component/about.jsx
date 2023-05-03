import React,{useState,useEffect} from 'react'
import axios from 'axios';
function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://example.com/api/about")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
    <section className="about">
      <h2>About Us</h2>
      {data ? (
        <p>{data.text}</p>
      ) : (
        <p>Loading...</p>
      )}
    </section>
    </>
  )
}

export default About
