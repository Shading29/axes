import React from "react";
import { IList, IListItem } from "./interfaces";
import {
  LowerTree,
  TreeWrapper,
  TreeBody,
  TreeTr,
  TreeHeadLabel,
  LowerTreeBody,
  TreeLeftCell,
  TreeLeftCellText,
  TreeRightCell,
  Ball,
  BallWrapper,
  Content,
} from "./stocks/Wrappers";

const Homepage = ({ list }: IList) => {
  return (
    <Content>
      {list
        ? list.map((tree: IListItem, index) => {
            return (
              <TreeWrapper key={index}>
                <TreeBody>
                  <TreeTr>
                    <TreeHeadLabel>{tree.treeName || ""}</TreeHeadLabel>
                    <BallWrapper>
                      {" "}
                      <Ball />
                    </BallWrapper>
                  </TreeTr>
                </TreeBody>
                <LowerTreeBody>
                  {tree.lower &&
                    tree.lower.map((branch, index) => {
                      return (
                        <LowerTree key={index}>
                          <TreeLeftCell>
                            <TreeLeftCellText>{branch.field || ""}</TreeLeftCellText>
                          </TreeLeftCell>
                          <TreeRightCell>{branch.fieldLabel || ""}</TreeRightCell>
                        </LowerTree>
                      );
                    })}
                </LowerTreeBody>
              </TreeWrapper>
            );
          })
        : ""}
    </Content>
  );
};

Homepage.getInitialProps = (): IList => {
  // const result = await fetch('http://localhost:3000/stocks/data.json')
  return {
    list: [
      {
        treeName: "Общая информация",
        lower: [
          {
            field: "Документ",
            fieldLabel: "Профиль требований к должности",
          },
          {
            field: "Должность",
            fieldLabel: "Инженер",
          },
          {
            field: "Функциональное направление",
            fieldLabel: "Логистика",
          },
          {
            field: "Специализация",
            fieldLabel:
              "Обслуживание и ремонт механического, энергитического и электрооборудования",
          },
        ],
      },
      {
        treeName: "Образование",
        lower: [
          {
            field: "Степень",
            fieldLabel: "Высшее/Среднее высшее",
          },
          {
            field: "Специализация",
            fieldLabel: "Инженерно-техническая",
          },
        ],
      },
      {
        treeName: "Корпоративные компетенции",
        lower: [
          {
            field: "Сотруднически",
            fieldLabel: "1",
          },
          {
            field: "Коммуникации и убеждения",
            fieldLabel: "2",
          },
          {
            field: "Достижение результата",
            fieldLabel: "3",
          },
          {
            field: "Системное мышление",
            fieldLabel: "3",
          },
          {
            field: "Культура безопасности",
            fieldLabel: "2",
          },
          {
            field: "Сотрудничество",
            fieldLabel: "1",
          },
        ],
      },
    ],
  };
};

export default Homepage;
