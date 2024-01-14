"use client";

import styled from "@emotion/styled";

const PagingNavigatorWrapper = styled.div``;

const PagingNavigator = (props: {
  total: number;
  perPage: number;
  indexRange: number;
  page: number;

  onChange: (v: number) => void;
}) => {
  const maxIndex = Math.ceil(props.total / props.perPage);
  const indexPage = Math.ceil(props.page / props.indexRange);
  const indexList = Array(props.indexRange)
    .map((v, idx) => {
      return indexPage * (props.indexRange - 1) + 1 + idx;
    })
    .reduce((prev, curr) => {
      if (curr <= maxIndex) {
        prev.push(curr);
      }
      return prev;
    }, [] as number[]);
  return <PagingNavigatorWrapper></PagingNavigatorWrapper>;
};

export default PagingNavigator;
