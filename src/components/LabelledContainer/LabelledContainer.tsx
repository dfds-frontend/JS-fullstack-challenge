import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
type Props = {
  label: string;
};

export const LabelledContainer: React.FC<Props> = ({ children, label }) => {
  return (
    <StyledLabelledContainer>
      <Typography>{label}</Typography>
      {children}
    </StyledLabelledContainer>
  );
};

const StyledLabelledContainer = styled.div`
  border: 1px solid #00000012;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
