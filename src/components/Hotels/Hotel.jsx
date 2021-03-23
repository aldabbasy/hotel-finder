import React from 'react'
import { HotelContainer, LabelContainer, HotelLabel, HotelData } from './styles'

const Hotel = ({hotel, nights}) => {
  return (
    <HotelContainer>
      <div>
        <LabelContainer>
          <HotelLabel>Name: </HotelLabel>
          <HotelData>{hotel.name}</HotelData>
        </LabelContainer>
      </div>
      <div>
        <LabelContainer>
          <HotelLabel>Price: </HotelLabel>
          <HotelData>{Number(hotel.price) * nights} AED</HotelData>
        </LabelContainer>
      </div>
      <div>
        <LabelContainer>
          <HotelLabel>City: </HotelLabel>
          <HotelData>{hotel.city}</HotelData>
        </LabelContainer>
      </div>
    </HotelContainer>
  )
}

export default Hotel
