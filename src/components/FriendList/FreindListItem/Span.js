import styled from 'styled-components';

const Span = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export default Span;
