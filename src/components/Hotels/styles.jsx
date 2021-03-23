import styled from 'styled-components'
import { FadeInRight } from '../../utils/Animations';
import Colors from '../../utils/Colors';

export const HotelsContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grey};
  height: 100vh;
`;

export const HotelListContainer = styled.div`
  margin-top: 85px;
  width: 63rem;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 2px 20px 0 ${Colors.shadow};
  background-color: ${Colors.white};
  border: none;
  animation: ${FadeInRight} 0.4s ease-in-out forwards;
`;
export const HotelContainer = styled.fieldset`
  width: 432px;;
  padding: 15px 30px;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  background-color: ${Colors.white};
  border: 2px solid ${Colors.primary};
`;
export const LabelContainer = styled.span`
  display: flex;
`;
export const HotelLabel = styled.legend`
  width: 50px;
  margin-bottom: 6px;
  font-size: 14px;
  color: ${Colors.label};
`;
export const HotelData = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  color: ${Colors.black};
`;
export const SortByContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const FilterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
export const SortByBtn = styled.button`
  width: 120px;
  height: 40px;
  background: ${Colors.secondary};
  color: ${Colors.white};
  border: none;
  border-radius: 14px;
  margin-left: 0.5rem;
  &:focus{
    outline: none;
  }
  &:hover{
    filter: brightness(90%);
    cursor: pointer;
  }
`;
export const ResetBtn = styled.button`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1;
  width: 65px;
  height: 30px;
  background: ${Colors.primary};
  color: ${Colors.white};
  border: none;
  border-radius: 14px;
  &:focus{
    outline: none;
  }
  &:hover{
    filter: brightness(90%);
    cursor: pointer;
  }
`;