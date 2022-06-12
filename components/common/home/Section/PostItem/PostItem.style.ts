import styled from "@emotion/styled";
import { css } from "@emotion/react";

const titleStyle = css`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
`;

const textStyle = css`
  font-family: "Roboto";
  font-style: normal;
`;

export const PostItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    h2 {
      color: #6c5ce7;
    }
  }
`;

export const Contents = styled.div`
  flex: 1;

  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  order: 0;
`;

export const Thumnail = styled.img`
  box-sizing: border-box;

  width: 200px;
  height: 134px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 1rem;
  order: 1;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const AuthorImage = styled.img`
  box-sizing: border-box;

  width: 24px;
  height: 24px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 100%;
  order: 0;
`;

export const AuthorName = styled.span`
  ${titleStyle}

  font-size: 14px;
  line-height: 16px;
`;

export const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  padding: 0.4rem 0;
`;

export const SummaryTitle = styled.h2`
  ${textStyle}
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
`;

export const SummarySub = styled.p`
  display: flex;
  flex: 1;
  max-height: 48px;

  ${textStyle}
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  text-overflow: ellipsis;
  overflow: hidden;

  color: #4e4e4e;
`;

export const PostItemDate = styled.p`
  ${textStyle}
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.6rem;
`;
