import styled, { createGlobalStyle, css } from 'styled-components'
import Colors from '../../utils/Colors';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Manrope',-apple-system,'Arial';
  }
  
  *::-webkit-scrollbar {
      background-color: none;
      width: 8px;
  }
  *::-webkit-scrollbar-track {
      background-color: none;
  }
  *::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
  }
  *::-webkit-scrollbar-button {
      display:none;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const FlexCenterCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  width: 100%;
`;
export const ContainerFluid = styled.div`
  padding: 32px;
  width: 100%;
`;
export const Row = styled.div`
  display: table;
  width: 100%;
`;
export const Col = styled.div`
  float: left;
  width: auto;
  ${props => props.size && `
    width: calc((100% / 12) * ${props.size > 12 ? 12 : props.size});
  `};
  ${props => props.xs && `
    @media (max-width: 480px) {
      width: calc((100% / 12) * ${props.xs > 12 ? 12 : props.xs});
    }
  `};
  ${props => props.sm && `
    @media (max-width: 576px) {
      width: calc((100% / 12) * ${props.sm > 12 ? 12 : props.sm});
    }
  `};
  ${props => props.md && `
    @media (max-width: 768px) {
      width: calc((100% / 12) * ${props.md > 12 ? 12 : props.md});
    }
  `};
  ${props => props.lg && `
    @media (max-width: 992px) {
      width: calc((100% / 12) * ${props.lg > 12 ? 12 : props.lg});
    }
  `};
  ${props => props.xl && `
    @media (max-width: 1200px) {
      width: calc((100% / 12) * ${props.xl > 12 ? 12 : props.xl});
    }
  `};
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;
export const FormInput = styled.input`
  padding: 7px 8px;
  border-radius: 4px;
  border: solid 1px ${props => props.error ? Colors.error : Colors.border};  
  ${props => props.error && css`color: ${Colors.error}`};
  &:focus {
    outline: none !important;
  }
`;
export const FormLabel = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  color: ${props => props.error ? Colors.error : Colors.label};
`;
export const FormError = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${Colors.error};
`;