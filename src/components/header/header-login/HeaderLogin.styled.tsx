import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeaderLogin = styled.div.attrs(() => ({
  role: 'banner-login'
}))`
  margin: 0 0.5em;
`;

const StyledHeaderLoginLink = styled(NavLink)`
  font-size: 1.2rem;
  text-decoration: none;

  &.active {
    color: #cc00ff;
  }
`;

export default StyledHeaderLogin;
export { StyledHeaderLoginLink };
