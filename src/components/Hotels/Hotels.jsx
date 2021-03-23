import React, { useState } from 'react'
import { Col, FormInput, Row } from '../shared/styles'
import Hotel from './Hotel'
import { HotelsContainer, HotelListContainer, SortByContainer, SortByBtn, FilterHeaderContainer } from './styles'

const Hotels = ({hotels, nights, setHotels}) => {
  const [hotelsToRender, setHotelsToRender] = useState(hotels);

  const handleSortByName = () => {
    const arr = [...hotelsToRender];
    arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    setHotelsToRender(arr);
  }
  const handleSortByPrice = () => {
    const arr = [...hotelsToRender];
    arr.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    setHotelsToRender(arr);
  }

  const handleOnchange = (e) => {
    const val = e.target.value;
    if(val !== ''){
      setHotelsToRender(hotelsToRender.filter(hotel => {
        return hotel.name.toUpperCase().includes(val.toUpperCase())
      }));
    }
    else{
      setHotelsToRender(hotels)
    }
  }

  return (
    <HotelsContainer>
      <HotelListContainer>
        <div>
          <Row>
            <FilterHeaderContainer>
              <Col size={2}>
                <FormInput
                  onChange={(e) => handleOnchange(e)}
                  placeholder='filter By Name:'
                  type={'text'}
                />
              </Col>
              <Col size={10}>
                <SortByContainer>
                  <SortByBtn onClick={handleSortByName}>Sort By name</SortByBtn>
                  <SortByBtn onClick={handleSortByPrice}>Sort By price</SortByBtn>
                </SortByContainer>
              </Col>
            </FilterHeaderContainer>
          </Row>
          <Row>
            <Col size={12}>{hotelsToRender.map(hotel => <Col key={hotel.name} size={6} lg={12}><Hotel hotel={hotel} nights={nights}/></Col>)}</Col>
          </Row>
        </div>
      </HotelListContainer>
    </HotelsContainer>
  )
}

export default Hotels
