import styled from "styled-components";

export const Content: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
`;

export const TreeWrapper: any = styled.table`
  border-spacing: 0;
  min-width: 600px;
`;

export const TreeBody: any = styled.tbody``;

export const TreeTr: any = styled.tr``;

export const TreeHeadLabel: any = styled.td`
  font-weight: 800;
  text-align: right;
  padding-right: 23px;
  position: relative;
  top: 3px;
  color: green;
  font-family: "Open Sans";

  ::after {
    content: "";
    display: block;
    position: relative;
    left: 265px;
    top: -8px;
    width: 10px;
    height: 1px;
    background-color: grey;
  }

  ::before {
    content: "";
    display: block;
    position: relative;
    left: 278px;
    top: 12px;
    width: 10px;
    height: 2px;
    background-color: grey;
  }
`;

export const LowerTree: any = styled.tr``;

export const TreeLeftCell: any = styled.td`
  padding: 8px 6px 8px 0;
  text-align: right;
  border-right: solid 1px grey;
  color: green;
`;

export const TreeLeftCellText: any = styled.span`
  ::before {
    content: "";
    display: block;
    position: relative;
    left: 284px;
    top: 10px;
    width: 10px;
    height: 1px;
    background-color: grey;
  }
`;

export const TreeRightCell: any = styled.td`
  width: 300px;
  padding-left: 15px;
  color: green;
`;

export const Ball: any = styled.div`
  ::after {
    content: "";
    display: block;
    position: relative;
    border-radius: 50px;
    border: 2px solid grey;
    width: 12px;
    height: 12px;
    right: 9px;
    top: 6px;
  }
`;

export const LowerTreeBody: any = styled.tbody``;

export const BallWrapper: any = styled.td``;
