import React from 'react';
import './CommunityList.scss';
import Icon from '../../../const/Icons/Icon';

type DataProps = {
  id: number;
  title: string;
  content: string;
  nickName: string;
  status: string;
};

type dataTaype = {
  data: DataProps[];
  clickDeletePost: (id: number) => void;
};

const CommunityList = ({ data, clickDeletePost }: dataTaype) => {
  const postList = data.map((item) => {
    return (
      <div className="community" key={item.id}>
        <div className="community__top">
          <div className="community__top__nickname">
            <span>j</span>
          </div>
          <div className="community__top__info">
            <div>{item.nickName}</div>
            <div className="community__top__info__date">{item.title}</div>
          </div>
        </div>
        <div className="community__middles">{item.content}</div>
        <div className="community__bottom">
          <div className="community__bottom__icon">
            <div>
              <Icon size={21} color={'#B6B6CA'} icon="modify" />
            </div>
            <div onClick={() => clickDeletePost(item.id)}>
              <Icon size={21} color={'#B6B6CA'} icon="garbage" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <ul>{postList}</ul>;
};
export default CommunityList;
