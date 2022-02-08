import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .ant-image-mask {
    display: none;
  }
`;

export const AlcholStyled = styled.div`
  Button {
    margin: 1rem 1rem 1rem 0;
  }
  .alcholcupBtn {
    font-family: 'Harmony_B';
    background: #33434d;
    /* padding: 2rem 1rem; */

    /* span {
      padding: 0rem 1rem;
      font-size: 2rem;
      display: inline-block;
    } */
  }

  .tableWrap {
    padding: 5px;

    .table__box {
      text-align: center;
      width: 100%;
      height: 18rem;
      background-color: #33434d;
      margin-bottom: 20px;
      /* border: 1px solid #000; */
      overflow: hidden;
      .table__img {
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
        img {
          width: 100%;
          height: 17.8rem;
          object-fit: contain;
        }
      }
      p {
        font-size: 1.6rem;
        background-color: #000000b5;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2%;
      }
    }
  }
  .rounds {
    font-family: 'Harmony_B';
    font-size: 2.2rem;
    text-align: center;

    span {
      font-size: 1.8rem;
    }
  }
`;
