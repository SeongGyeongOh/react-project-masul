import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  .top__title {
    text-align: center;
    h2 {
      font-size: 1.6rem;
      font-family: 'Harmony_B', sans-serif;

      span {
        color: #f71313;
      }
    }
    p {
      font-size: 1.2rem;
      font-family: 'Harmony_M', sans-serif;
    }
  }
  .slick-list{
    height: 400px;
  }
  .ant-card {
    .ant-card-cover {
      border-bottom: 1px solid #ececec;
      background-color: #33434D;
      img{
        height: 250px;
        object-fit: contain;
      }
    }
    .ant-card-body {
      height: 130px;
      .ant-card-meta {
        .ant-card-meta-detail {
          .ant-card-meta-title {
            font-size: 1.2rem;
            font-family: 'Harmony_B', sans-serif;
          }
          .ant-card-meta-description {
            font-family: 'Harmony_M', sans-serif;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
`;
