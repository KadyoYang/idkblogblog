import styled from "@emotion/styled";

export const DefaultLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #e6e6e6; */
  width: 950px;
  margin: 0 auto;

  header {
    /* background-color: blue; */
    height: 150px;
  }

  section {
    display: flex;
    width: 100%;
    /* background-color: red; */
    /* min-height: 70%; */

    .meta_section {
      display: flex;
      flex-direction: column;
      width: 16%;
    }

    .content_section {
      width: 84%;
    }
  }

  footer {
    background-color: silver;
    height: 300px;
    width: 100%;

    padding-top: 60px;
  }
`;
