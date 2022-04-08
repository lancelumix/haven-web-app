// Library Imports
import React from "react";

// Relative Imports
import { Container, Field, Labels, Error, Wrapped, Button } from "./styles";
import { Label } from "../../../../assets/styles/type.js";

const DescriptionButton = ({
  label,
  error = null,
  width = false,
  ref = null,
  button,
  onClick,
  ...rest
}) => {
  return (
    <Container useGridColumn={width}>
      <Labels>
        <Label>{label}</Label>
        <Error>{error}</Error>
      </Labels>
      <Wrapped>
        <Field ref={ref} {...rest} />
        <Button onClick={onClick}>{button}</Button>
      </Wrapped>
    </Container>
  );
};

export default DescriptionButton;
