import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: center;
  box-shadow: ${props => props.theme.colors.boxShadow};
  & thead th {
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
  }
  & tbody td {
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;
  }
  & tbody tr:nth-child(even) {
    background-color: ${props => props.theme.colors.backgroundTable};
  }

  & thead th,
  & tbody td {
    width: calc(100% / 3);
  }
`;
