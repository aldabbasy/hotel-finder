import React, { useState } from 'react'
import { Col, FlexCenterCenter, FormInput, FormLabel, InputGroup, Row } from '../shared/styles'
import Hotel from './Hotel'
import { HotelsContainer, HotelListContainer, SortByContainer, SortByBtn, FilterHeaderContainer, ResetBtn } from './styles'

const Hotels = ({hotels, nights, setHotels}) => {
  const [hotelsToRender, setHotelsToRender] = useState(hotels);
  const [nameFilter, setNameFilter] = useState('');
  const [priceRange, setPriceRange] = useState(0);

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

  let hotelsList = [...hotelsToRender].filter(hotel => {
    if(nameFilter !== ''){
        return hotel.name.toUpperCase().includes(nameFilter.toUpperCase())
    }
    else{
      return true;
    }
  }).filter(hotel => {
    if(priceRange !== '0'){
        return (Number(hotel.price) * Number(nights)) <= Number(priceRange)
    }
    else{
      return true;
    }
  });

  return (
    <HotelsContainer>
      <ResetBtn onClick={() => setHotels(null)}>Reset</ResetBtn>
      <HotelListContainer>
        <div>
          <Row>
            <FilterHeaderContainer>
              <Col size={3}>
                <InputGroup>
                  <FormLabel>Hotel Name</FormLabel>
                  <FormInput
                    onChange={(e) => setNameFilter(e.target.value)}
                    placeholder='filter By Name:'
                    value={nameFilter}
                    type={'text'}
                  />
                </InputGroup>
              </Col>
              <Col style={{marginLeft: '0.5rem'}} size={3}>
                <FlexCenterCenter>
                  <InputGroup>
                    <FormLabel>Price Range</FormLabel>
                    <FormInput
                      onChange={(e) => setPriceRange(e.target.value)}
                      placeholder='filter By Name:'
                      value={priceRange}
                      type={'range'}
                      min={0}
                      max={10000}
                    />
                  </InputGroup>
                  {priceRange}
                </FlexCenterCenter>
              </Col>
              <Col size={6}>
                <SortByContainer>
                  <SortByBtn onClick={handleSortByName}>Sort by Name</SortByBtn>
                  <SortByBtn onClick={handleSortByPrice}>Sort by Price</SortByBtn>
                </SortByContainer>
              </Col>
            </FilterHeaderContainer>
          </Row>
          <Row>
            <Col size={12}>{hotelsList.map(hotel => <Col key={hotel.name} size={6} lg={12}><Hotel hotel={hotel} nights={nights}/></Col>)}</Col>
          </Row>
        </div>
      </HotelListContainer>
    </HotelsContainer>
  )
}

export default Hotels
