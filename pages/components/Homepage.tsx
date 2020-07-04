import React from "react";
import { IList } from "./interfaces";
import { Content } from "./Wrappers";
import Tree from "./Tree";
import { IProps } from "./Tree/interfaces";

const Homepage = ({ tree }: IList) => {
  return (
    <Content>
      <Tree tree={tree} />
    </Content>
  );
};

Homepage.getInitialProps = (): IProps => {
  // const result = await fetch('/stocks/data.json') // Не хочет забирать данные с локалки
  return {
    tree: [
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
      {
        treeName: "Дополнительные требования",
        lower: [
          {
            field: "Инструменты",
            lower: [
              {
                label: "Продвинутый уровень",
              },
              {
                label: "Продвинутый уровень",
              },
            ],
          },
          {
            field: "SAP ERP",
          },
          {
            field: "SAP HR",
          },
          {
            field: "Иностранные языки",
            lower: [
              {
                label: "Продвинутый уровень",
              },
            ],
          },
          {
            field: "Английский",
          },
          {
            field: "Дерево",
            lower: [
              {
                label: "Так что",
              },
              {
                label: "Сюда можно сувать",
              },
              {
                label: "Любые",
              },
              {
                label: "Данные",
              },
              {
                label: "И не должно произойти ничего плохово ",
              },
              {
                label: ":) ",
              },
            ],
          },
          {
            field: "Работает",
          },
          {
            field: "Полностью",
          },
          {
            field: "Динамически",
          },
        ],
      },
    ],
  };
};

export default Homepage;
