import soikut from "../assets/images/soikut.jpg";
import Button from "./Button";
// import Content from "./Content";
// import Image from "./Image";
import Title from "./Title";
import { CardContainer, ContentContainer, ButtonsContainer } from "./styles/Container.styles";
import { StyledTitle } from "./styles/Custom.styles";
import { Tag, H1, P, Images } from "./styles/Elements.styles";

export default function Card() {
  return (
    <>
      <CardContainer>
        <ContentContainer>
          <Tag color="#76ACDB">EXCLUSIVE</Tag>
          <H1>
            <StyledTitle text=" React Styled Components" color="#76ACDB" />
            </H1>
          <P>
            Exclusive React JS Tutorial on Styled Components where you will
            learn why we need this & how to use it.
          </P>
          <ButtonsContainer>
            <Button
              link="https://www.youtube.com/channel/UC9saXGiGgqf39C6Z2L5vWGA"
              text="Watch now"
            />
            <Button link="https://github.com/sadekur" text="Github repo" />
          </ButtonsContainer>
        </ContentContainer>
        {/* <Images> */}
          <Images src={soikut} alt="Soikut" width="250px" />
        {/* </Images> */}
        </CardContainer>
    </>
  );
}
