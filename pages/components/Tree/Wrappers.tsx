import styled from "styled-components";

interface IBallSettings {
  isSecondBranch: boolean;
}

interface ILeftCellText {
  hasText: boolean;
}

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
  margin: 10px 0;
  position: relative;
  font-size: 14px;
`;

export const TreeHeadLabel: any = styled.td`
  font-weight: 800;
  text-align: right;
  padding-right: 23px;
  position: relative;
  top: 2.5px;
  color: green;
  font-size: 16px;

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
`;

export const TreeLeftCell: any = styled.td`
  padding: 8px 6px 8px 0;
  text-align: right;
  border-right: solid 1px grey;
  color: green;
`;

export const TreeLeftCellText: any = styled.span<ILeftCellText>`
  ${(props) =>
    props.hasText
      ? `
      ::before {
        content: "";
        display: block;
        position: relative;
        left: 285px;
        top: 10px;
        width: 10px;
        height: 1px;
        background-color: grey;
      }`
      : null}
`;

export const TreeRightCell: any = styled.td`
  width: 300px;
  padding: 4px 0 0 15px;
  color: green;
`;

export const Ball: any = styled.div<IBallSettings>`
  ::after {
    content: "";
    display: block;
    position: ${(props) => (props.isSecondBranch ? "absolute" : "relative")};
    border-radius: 50px;
    border: 2px solid grey;
    width: 12px;
    height: 12px;
    ${(props) =>
      props.isSecondBranch // Расположил бы св-ва вертикально, но тогда Styled Component отказывается их воспринимать, видимо из-за eslinta :( Поэтому в строчку
        ? `left: -5px; top: -6px;`
        : `right: 9.5px; top: 3px;`}
  }

  ::before {
    content: "";
    display: block;
    position: relative;
    ${(props) =>
      props.isSecondBranch
        ? `left: -1px; top: 1px;`
        : `left: -5.5px;top: 11.5px;`}
    width: 8px;
    height: 2px;
    background-color: grey;
  }
`;

export const BranchTBody: any = styled.tbody`
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 2px;
    height: 10px;
    background-color: white;
    left: -1px;
    bottom: -2px;
  }
`;

export const BranchTable: any = styled.table`
  position: absolute;
  left: 3px;
  top: 11px;
  border-spacing: 0;
`;

export const BranchTd: any = styled.td`
  border-left: 1px solid grey;
  padding: 15px 0 0 15px;

  ::before {
    content: "";
    position: relative;
    display: block;
    width: 12px;
    height: 1px;
    background-color: grey;
    left: -15px;
    top: 8px;
  }
`;

export const LowerTree: any = styled.tr`
  :last-child {
    ::after {
      content: "";
      position: absolute;
      display: block;
      width: 3px;
      height: 20px;
      background-color: white;
      left: 283px;
      bottom: -6px;
    }
  }
`;

// Нужно создавать блоки, т.к. консоль ругается на неправильную структуру таблицы
export const LowerTreeBody: any = styled.tbody``;
export const BranchTr: any = styled.tr``;
export const BallWrapper: any = styled.td``;
export const TreeBody: any = styled.tbody``;
export const TreeTr: any = styled.tr``;
