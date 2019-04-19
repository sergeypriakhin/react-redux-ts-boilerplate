import * as React from "react";
import styled from "styled-components";

interface IHeaderProps {
  title?: string;
}

const HeaderWrap = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  font-size: 0.833333rem;
  font-weight: 500;
  color: white;
  background: rgb(219, 112, 147);
  transition: background 300ms ease-out 0s;
  padding: 0px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1.11111rem;
`;

const Logo = styled.a`
  padding: 0.8rem 0;
  font-size: 1rem;
`;

const Header: React.SFC<IHeaderProps> = props => {
  const { title } = props;
  return (
    <HeaderWrap>
      <Container>
        <Logo>{title}</Logo>
      </Container>
    </HeaderWrap>
  );
};

Header.defaultProps = {
  title: "tsreact-boilerplate"
};

export default Header;
