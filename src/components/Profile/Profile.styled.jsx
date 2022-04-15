import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  margin: 0 auto 35px;
  width: 290px;
  height: 346px;
  border-radius: 5px 5px;
  box-shadow: ${props => props.theme.colors.boxShadow};
  background-color: ${props => props.theme.colors.white};
`;

export const Description = styled.div`
  padding: 25px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  margin-bottom: 30px;

  overflow: hidden;
  width: 100px;
  height: 100px;
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => props.theme.colors.gray};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: ${props => `1px solid ${props.theme.colors.borderProfile}`};
  background-color: ${props => props.theme.colors.blueGray};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 3);
  padding: 15px;
  &:not(:last-child) {
    border-right: ${props => `1px solid ${props.theme.colors.borderProfile}`};
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${props => props.theme.colors.gray};
`;

export const Quantity = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props => props.theme.colors.black};
`;
