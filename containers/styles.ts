import styled from "@emotion/styled";

export const DefaultLayoutStyle = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;

  header {
    border: 1px solid black;
  }

  section {
    border: 1px solid black;
    display: flex;
    width: 100%;

    .meta_section {
      border: 1px solid black;
      display: flex;
      flex-direction: column;

      width: 16%;
    }

    .content_section {
      border: 1px solid black;
      width: 84%;
    }
  }

  footer {
    border: 1px solid black;
    background-color: silver;
    height: 300px;
    width: 100%;

    padding-top: 60px;
  }
`;
