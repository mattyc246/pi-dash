import React from 'react';
import styled from '@emotion/styled';

const Col = styled.div`
  grid-column-start: ${({ colStart }) => colStart};
  grid-column-end: ${({ colEnd }) => colEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-row-end: ${({ rowEnd }) => rowEnd};
`;

const GridCol = ({ colStart, colEnd, rowStart, rowEnd, children }) => {
  return (
    <Col
      colStart={colStart}
      colEnd={colEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
    >
      {children}
    </Col>
  );
};

export default GridCol;
