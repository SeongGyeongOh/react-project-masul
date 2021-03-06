import React from 'react';
import './CommunityInput.scss';
import { Input } from 'antd';

type ListProps = {
  content: string;
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  clickAddPost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nickname: string | null;
};

const CommunityInput = ({ title, content, onChangeTitle, onChangeContent, clickAddPost, nickname }: ListProps) => {
  const { TextArea } = Input;
  const firstName = nickname?.slice(0, 1);

  return (
    <div className="community">
      <div className="community__top">
        <div className="community__top__nickname">
          <span>{firstName}</span>
        </div>
        <div className="community__top__title">
          <Input placeholder="제목" value={title} onChange={onChangeTitle} />
        </div>
      </div>
      <div className="community__middle">
        <TextArea placeholder="내용" value={content} onChange={onChangeContent} />
      </div>
      <div className="community__bottom">
        <button onClick={clickAddPost} className="bold">
          <span>글쓰기</span>
        </button>
      </div>
    </div>
  );
};
export default CommunityInput;
