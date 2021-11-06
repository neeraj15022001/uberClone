import React from "react";
import tw from "tailwind-styled-components/";
import { carList } from "../data/carList";

function RideSelector(props) {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={{ index }}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>$24.00</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
}
const Wrapper = tw.div`overflow-auto border-b-2`;
const Title = tw.div`text-gray-500 text-center text-xs py-2 border-b`;
const CarList = tw.div`p-4`;
const Car = tw.div`flex justify-between items-center py-4`;
const CarImage = tw.img`h-14 mr-4`;
const CarDetails = tw.div`flex flex-col flex-1`;
const Service = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const Price = tw.div`text-sm`;
export default RideSelector;
