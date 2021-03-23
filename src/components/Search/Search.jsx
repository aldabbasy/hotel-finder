import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { getHotels } from '../../utils/services'
import Hotels from '../Hotels/Hotels';
import { Col, Container, FormError, FormInput, FormLabel, InputGroup, Row } from '../shared/styles'
import {
  SearchContainer, SearchFormButtonsContainer, SearchFormContainer, SearchFormHeaderContainer,
  SearchFormHeaderLabel, FormSubmitButton
} from './styles'

const SearchForm = ({ setHotels, setNights }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { control, handleSubmit, errors } = useForm();
  const onChange = args => ({ value: args[0].target.value });

  const calculateNights = (from, to) =>{
    const fromDate = new Date(from);  
    const toDate = new Date (to);  
    const total_seconds = Math.abs(toDate - fromDate) / 1000;  
    const days_difference = Math.floor (total_seconds / (60 * 60 * 24));  
    return days_difference;
  }

  const onSubmit = handleSubmit(variables => {
    setLoading(true);
    getHotels().then(res => {
      const { from, to } = variables;
      const filteredHotels = res.filter(hotel => {
        const availableOn = new Date(hotel.available_on).toISOString();
        return availableOn >= new Date(from).toISOString() && availableOn <= new Date(to).toISOString();
      });
      setNights(calculateNights(from, to));
      setHotels(filteredHotels);
      setLoading(false);
    }).catch(err => {
      setError(true);
      setLoading(false);
    });
  });

  return (
    <SearchContainer>
      <SearchFormContainer>
        <SearchFormHeaderContainer>
          <SearchFormHeaderLabel>
            Search Hotel
          </SearchFormHeaderLabel>
        </SearchFormHeaderContainer>
        <Container>
          <Row>
            <Col size={12}>
              <InputGroup>
                <FormLabel error={errors.from}>From</FormLabel>
                <Controller
                  as={<FormInput
                    error={errors.from}
                    type={'date'}
                  />}
                  control={control}
                  name={'from'}
                  onChange={onChange}
                  defaultValue={''}
                  rules={{ required: true }}
                  style={{ height: 34 }}
                />
                {errors.from && <FormError>{errors.from.message || 'invalid value'}</FormError>}
              </InputGroup>
            </Col>
            <Col size={12}>
              <InputGroup>
                <FormLabel error={errors.to}>To</FormLabel>
                <Controller
                  as={<FormInput
                    error={errors.to}
                    type={'date'}
                  />}
                  control={control}
                  name={'to'}
                  onChange={onChange}
                  defaultValue={''}
                  rules={{ required: true }}
                  style={{ height: 34 }}
                />
                {errors.to && <FormError>{errors.to.message || 'invalid value'}</FormError>}
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <SearchFormButtonsContainer>
          <FormSubmitButton onClick={onSubmit} loading={loading} error={error}>
            Search
          </FormSubmitButton>
        </SearchFormButtonsContainer>
      </SearchFormContainer>
    </SearchContainer>
  )
}

const Search = () => {
  const [hotels, setHotels] = useState(null);
  const [nights, setNights] = useState(0);

  if (hotels) {
    return (
      <Hotels hotels={hotels} nights={nights} setHotels={setHotels}  />
    )
  }

  return (
    <SearchForm setHotels={setHotels} setNights={setNights} />
  )
}


export default Search;

