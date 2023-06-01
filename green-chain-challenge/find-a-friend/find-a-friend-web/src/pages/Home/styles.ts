import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: #f15156;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-height: 572px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  h1 {
    font-weight: 800;
    font-size: 72px;
    line-height: 90%;
    letter-spacing: -0.02em;
    max-width: 487px;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    max-width: 407px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  gap: 126px;

  form {
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;

    .input-group {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;

      .states {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;

        label {
          font-size: 16px;
          line-height: 34px;
        }

        select {
          width: 72px;
          height: 72px;
          border: 1px solid #ffffff;
          border-radius: 20px;
          background-color: #f15156;
          padding: 14px;
          /* appearance: none; */
          color: #ffffff;
        }
      }

      .cities {
        display: flex;
        width: 100%;
        flex: 1;

        div {
          width: 100%;

          select {
            width: 100%;
            padding: 20px 8px;
            border-radius: 20px;
            border: none;
            background-color: #e44449;
            font-weight: 800;
            font-size: 20px;
            line-height: 34px;
            color: #ffffff;
            text-align: center;
          }
        }
      }

      button {
        width: 72px;
        height: 72px;
        border-radius: 20px;
        border: none;
        background: #f4d35e;
        color: #0d3b66;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;

        &:hover {
          background: #d0b041;
        }
      }
    }
  }
`;
