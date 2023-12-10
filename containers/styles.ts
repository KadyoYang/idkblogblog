import styled from "@emotion/styled";

export const DefaultLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #e6e6e6; */
  width: 1000px;
  margin: 0 auto;

  header {
    /* background-color: blue; */
    height: 180px;
  }

  section {
    display: flex;
    width: 100%;
    /* background-color: red; */
    /* min-height: 70%; */

    .meta_section {
      display: flex;
      flex-direction: column;
      max-width: 20%;
    }

    .content_section {
      width: 80%;
    }
  }

  footer {
    background-color: silver;
    height: 100px;
    width: 100%;

    padding-top: 60px;
  }
`;
