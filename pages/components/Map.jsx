import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmVlcmFqMTUwMjIwMDEiLCJhIjoiY2t2bG83dGk3M2lqdzJvcGdwNjdzM2toaCJ9.ab0UC-ACBsavsHhlpQOT5Q";
function Map(props) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [30.666732779999986, 76.29208373999997],
      zoom: 1,
    });
  }, []);
  return <Wrapper id={"map"}></Wrapper>;
}
const Wrapper = tw.div`
bg-red-500 flex-1
`;
export default Map;
