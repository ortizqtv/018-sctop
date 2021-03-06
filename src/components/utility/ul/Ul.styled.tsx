import styled from 'styled-components';

interface StyledUlProps {
  styled?: {
    'align-items'?: string;
    display?: string;
    'justify-content'?: string;
    'list-style'?: string;
    padding?: string;
    width?: string;
  };
}

const StyledUl = styled.ul<StyledUlProps>`
  align-items: ${(props) => props.styled?.['align-items']};
  display: ${(props) => props.styled?.display};
  justify-content: ${(props) => props.styled?.['justify-content']};
  list-style: ${(props) => props.styled?.['list-style']};
  padding: ${(props) => props.styled?.padding};
  width: ${(props) => props.styled?.width};
`;

export default StyledUl;
