import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid rgba(0, 0, 20, 0.1);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  padding: 10px;
  margin: 10px 0;
  background-color: #1a2f41;
  color: white;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: #476172;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  //for smartphones
  @media (min-width: 320px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  //for tablets, iPads
  @media (min-width: 481px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  //for small screens, laptops
  @media (min-width: 769px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  //for large screens, desktop
  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const WideCard = styled.div`
  border: 1px solid rgba(0, 0, 20, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  background-color: #1a2f41;
  color: white;
`;
