import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 40px 0;
  background: #000;
  color: #fff;
  a {
      color: #fff;
   }
  h3 {
    font-size: 20px;
    margin-bottom: 16px;
    padding-bottom: 10px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      /* background: #ffbd59; */
      background: #38b6ff;
      width: 80%;
      border-radius: 2px;
    }
  }
  .copy-right-section {
    font-size: 12px;
    padding: 25px 0 0;
    color: #a4a4a4;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;
