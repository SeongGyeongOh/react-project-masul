import React, { useState } from 'react';
import './CommunityInput.scss';
import { Input } from 'antd';

type ListProps = {
  content: string;
  title: string;
  onChangeTitle: any;
  onChangeContent: any;
  onSubmit: any;
};

const CommunityInput = ({ title, content, onChangeTitle, onChangeContent, onSubmit }: ListProps) => {
  const { TextArea } = Input;

  return (
    <div className="community">
      <div className="community__top">
        <div className="community__top__nickname">
          <span>J</span>
        </div>
        <div className="community__top__title">
          <Input placeholder="제목" value={title} onChange={onChangeTitle} />
        </div>
      </div>
      <div className="community__middle">
        <TextArea placeholder="내용" value={content} onChange={onChangeContent} />
      </div>
      <div className="community__bottom">
        <button onClick={onSubmit} className="bold">
          <span>글쓰기</span>
        </button>
      </div>
    </div>
  );
};
export default CommunityInput;
