import React, { Fragment } from "react";
import { IProps, IFirstBranch, ITree, ISecondBranch } from "./interfaces";
import {
  Ball,
  BallWrapper,
  LowerTree,
  LowerTreeBody,
  TreeBody,
  TreeHeadLabel,
  TreeLeftCell,
  TreeLeftCellText,
  TreeRightCell,
  TreeTr,
  TreeWrapper,
  BranchTable,
  BranchTr,
  BranchTd,
  BranchTBody,
} from "./Wrappers";

const Tree = (props: IProps) => {
  const { tree = [] } = props || {};

  const templateFirstBranch = (branch: IFirstBranch, index: number) => {
    return (
      <LowerTree key={index}>
        <TreeLeftCell>
          <TreeLeftCellText hasText={!!branch.fieldLabel || !!branch.lower}>
            {branch.field || ""}
          </TreeLeftCellText>
        </TreeLeftCell>
        <TreeRightCell>
          {branch.fieldLabel}
          {branch.lower && renderSecondBranch(branch.lower)}
        </TreeRightCell>
      </LowerTree>
    );
  };

  const renderSecondBranch = (lower: ISecondBranch[]) => {
    return (
      <div style={{ position: "relative" }}>
        <Ball isSecondBranch />
        <BranchTable>
          <BranchTBody>{lower.map(templateSecondBranch)}</BranchTBody>
        </BranchTable>
      </div>
    );
  };

  const templateSecondBranch = (item: ISecondBranch, index: number) => {
    return (
      <BranchTr key={index}>
        <BranchTd>{item.label}</BranchTd>
      </BranchTr>
    );
  };

  if (!Object.keys(tree).length) {
    return (
      <div style={{ color: "red", fontSize: "30px" }}>Ошибка, нет данных</div>
    );
  }

  return (
    <Fragment>
      {tree.map((tree: ITree, index) => {
        return (
          <TreeWrapper key={index}>
            <TreeBody>
              <TreeTr>
                <TreeHeadLabel>{tree.treeName || ""}</TreeHeadLabel>
                <BallWrapper>
                  <Ball />
                </BallWrapper>
              </TreeTr>
            </TreeBody>
            <LowerTreeBody>
              {tree.lower && tree.lower.map(templateFirstBranch)}
            </LowerTreeBody>
          </TreeWrapper>
        );
      })}
    </Fragment>
  );
};

export default Tree;
