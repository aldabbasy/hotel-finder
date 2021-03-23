import styled, {css} from 'styled-components'
import { FadeInRight, Shake } from '../../utils/Animations';
import Colors from '../../utils/Colors';
import { ActivityIndicator } from '../shared/ActivityIndicator';

export const SearchContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.grey};
  height: 100vh;
`;
export const SearchFormContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 416px;
  padding: 53px 56px 66px 59px;
  border-radius: 15px;
  box-shadow: 0 2px 20px 0 ${Colors.shadow};
  background-color: ${Colors.white};
  border: none;
  animation: ${FadeInRight} 0.4s ease-in-out forwards;
`;
export const SearchFormHeaderContainer = styled.div`
  margin: 21px;
`;
export const SearchFormHeaderLabel = styled.legend`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.primary};
`;

export const SearchFormButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
export const SearchSubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 22px;
  font-size: 14px;
  width: 120px;
  height: 42px;
  color: ${Colors.white};
  background-color: ${Colors.primary};
  &:focus{
    outline: none;
  }
  &:hover{
    cursor: pointer;
    filter: brightness(95%);
  }
  ${props => props.error && css`animation: ${Shake} 0.4s ease;`}
`;
export const FormSubmitButton = ({ error, loading, children, onClick }) => (
  <SearchSubmitButton onClick={onClick} error={error}>
    {loading ? <ActivityIndicator size={19} color={Colors.white} /> : children}
  </SearchSubmitButton>
);