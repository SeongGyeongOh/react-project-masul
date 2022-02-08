import React from 'react';
import './CommunityList.scss';
import Icon from '../../../const/Icons/Icon';

type DataProps = {
  id: number;
  title?: string;
  content?: string;
  nickName?: string;
  status?: string;
  created: string;
  updated: string;
  userId: string;
};

type dataTaype = {
  data: DataProps[];
  clickDeletePost: (id: number) => void;
  userId: string;
};

const CommunityList = ({ data, clickDeletePost, userId }: dataTaype) => {
  const postList = data.map((item) => {
    const parse = item.created;
    const today = new Date(parse);
    // + '-' + today.getMonth() + '-' + today.getDay();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = year + '-' + month + '-' + day;

    return (
      <li className="community" key={item.id}>
        <div className="community__top">
          <div className="community__top__nickname">
            <span>j</span>
          </div>
          <div className="community__top__info">
            <div>{item.nickName}</div>
            <div>{item.title}</div>
            <div className="community__top__info__date">{date}</div>
          </div>
        </div>
        <div className="community__middles">{item.content}</div>
        <div className="community__bottom">
          <div className="community__bottom__icon">
            <div onClick={() => clickDeletePost(item.id)}>
              {item.userId === userId ? <Icon size={21} color={'#B6B6CA'} icon="garbage" /> : null}
            </div>
          </div>
        </div>
      </li>
    );
  });

  return <ul>{postList}</ul>;
};
export default CommunityList;
