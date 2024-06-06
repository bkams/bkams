import * as React from "react";
import styled from "styled-components";
import inginerIcon from "./assets/icons/engineer.png";
import toolsIcon from "./assets/icons/tools.png";
import drillIcon from "./assets/icons/drill.png";
import sutcaseIcon from "./assets/icons/suitcase.png";
import buildingIcon from "./assets/icons/building.png";
import pencilIcon from "./assets/icons/pencil-and-ruler.png";
import brickwallIcon from "./assets/icons/brickwall.png";
import lideaIcon from "./assets/icons/idea.png";
import monitorIcon from "./assets/icons/monitor.png";

const features = [
  {
    icon: [brickwallIcon],
    title: "Строительство и эксплуатация зданий и сооружений",
    description:
      "Специальность включает изучение технических, экономических, правовых и безопасностных аспектов строительства, управления проектами и обслуживания зданий.",
  },

  {
    icon: [inginerIcon],
    title: "Архитектура",
    description:
      "Специалист, который занимается проектированием зданий, промышленных сооружений, социально-культурных объектов.",
  },

  {
    icon: [toolsIcon],
    title:
      "Монтаж и экспулатация внутрених санитарно-технических и вентилиационных устройств.",
    description:
      "Специалисты в области поддержания благоприятного искусственного климата в помещениях востребованы в современных предприятиях, требующих адаптивности и гибкости в новых условиях рынка.",
  },

  {
    icon: [drillIcon],
    title: "Технология деревообработки, дизайн и конструирование мебели",
    description:
      "Подготовка профессиональных кадров, которые в дальнейшем займутся разработкой, ведением, модернизацией деревообрабатывающего и мебельного производства.",
  },

  {
    icon: [sutcaseIcon],
    title: "Стоимостной инжиринг",
    description:
      "Стоимостной инжиниринг, направленный на управление стоимостью инвестиционного проекта, является неотъемлемой частью любого строительного проекта.",
  },

  {
    icon: [buildingIcon],
    title: "Земельно-имущественные отношения",
    description:
      "Это область деятельности, связанная с учетом, инвентаризацией и оценкой имущества, земли, информации и нематериальных активов для установления их рыночной, инвестиционной или другой стоимости.",
  },

  {
    icon: [pencilIcon],
    title: "Дизайн (по отраслям)",
    description:
      "На специальности научат аспектам дизайна, специфичным для определенных отраслей, включая основы дизайна, специализированные техники, понимание потребностей отрасли и работу с клиентами.",
  },

  {
    icon: [lideaIcon],
    title: "Электроснабжение (по отраслям)",
    description:
      "Выпускник по Электроэнергетике - универсал в энергетике, работает на предприятиях и может продолжить образование или научную работу.",
  },

  {
    icon: [monitorIcon],
    title:
      "Программное обеспечение вычислительной техники и автоматизированных систем",
    description:
      "Это эксперт, занимающийся проектированием и проверкой программных продуктов. ",
  },
];

function Experience() {
  return (
    <Container>
      <FeaturesWrapper>
        <FeaturesRow>
          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[0].icon}
                alt={`Icon for ${features[0].title}`}
              />
              <FeatureTitle>{features[0].title}</FeatureTitle>
              <FeatureDescription>{features[0].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[1].icon}
                alt={`Icon for ${features[1].title}`}
              />
              <FeatureTitle>{features[1].title}</FeatureTitle>
              <FeatureDescription>{features[1].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[2].icon}
                alt={`Icon for ${features[2].title}`}
              />
              <FeatureTitle>{features[2].title}</FeatureTitle>
              <FeatureDescription>{features[2].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>
        </FeaturesRow>
      </FeaturesWrapper>

      <FeaturesWrapper>
        <FeaturesRow>
          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[3].icon}
                alt={`Icon for ${features[3].title}`}
              />
              <FeatureTitle>{features[3].title}</FeatureTitle>
              <FeatureDescription>{features[3].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[4].icon}
                alt={`Icon for ${features[4].title}`}
              />
              <FeatureTitle>{features[4].title}</FeatureTitle>
              <FeatureDescription>{features[4].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[5].icon}
                alt={`Icon for ${features[5].title}`}
              />
              <FeatureTitle>{features[5].title}</FeatureTitle>
              <FeatureDescription>{features[5].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>
        </FeaturesRow>
      </FeaturesWrapper>

      <FeaturesWrapper>
        <FeaturesRow>
          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[6].icon}
                alt={`Icon for ${features[6].title}`}
              />
              <FeatureTitle>{features[6].title}</FeatureTitle>
              <FeatureDescription>{features[6].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[7].icon}
                alt={`Icon for ${features[7].title}`}
              />
              <FeatureTitle>{features[7].title}</FeatureTitle>
              <FeatureDescription>{features[7].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>

          <FeatureColumn>
            <FeatureContent>
              <FeatureIcon
                src={features[8].icon}
                alt={`Icon for ${features[8].title}`}
              />
              <FeatureTitle>{features[8].title}</FeatureTitle>
              <FeatureDescription>{features[8].description}</FeatureDescription>
            </FeatureContent>
          </FeatureColumn>
        </FeaturesRow>
      </FeaturesWrapper>
    </Container>
  );
}

export default Experience;

const Container = styled.section`
  justify-content: flex-end;
  border-radius: 48px;
  box-shadow: 12px 12px 20px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  max-width: 826px;
  flex-direction: column;
  padding: 74px 80px;
  margin: auto;
  margin-top: 200px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FeaturesWrapper = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
  &:last-child {
    margin-top: 75px;
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  }
`;

const FeaturesRow = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
  &:not(:first-child) {
    margin-left: 20px;
    @media (max-width: 991px) {
      margin-left: 0;
    }
  }
`;

const FeatureContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #02033b;
  text-align: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 77px;
  align-self: center;
`;

const FeatureTitle = styled.h3`
  letter-spacing: -0.4px;
  margin-top: 28px;
  font: 800 19px/132% Inter, sans-serif;
`;

const FeatureDescription = styled.p`
  margin-top: 32px;
  font: 400 16px/24px Inter, sans-serif;
`;
