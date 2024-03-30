import styled from "styled-components";
import Title from "../Title";
export const StyledTitle = styled(Title)`
  display: inline-block;
  color: ${({ color }) => color};
`;