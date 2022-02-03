import React, { useState } from 'react';
import CommunityInput from '../components/Community/Input/CommunityInput';
import CommunityList from '../components/Community/List/CommunityList';
import { useDispatch } from 'react-redux';
import { addPost } from '../modules/reducers/post';

const CommunityContainer = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const data = [
    {
      key: 1, // key
      title: '마정한바보', // 제목
      content: '멍청청', // 내용
      nickName: '빛나리', // 닉네임
      date: '2022-01-27 15:42', // 등록일
      heart: 9, // 좋아요
    },
  ];

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmit = () => {
    const result = {
      key: 2, // key
      title: title, // 제목
      content: content, // 내용
      nickName: '빛나리', // 닉네임
      date: '2022-01-27 15:42', // 등록일
    };

    dispatch(addPost(result));
    setTitle('');
    setContent('');
  };

  return (
    <>
      <CommunityInput
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onSubmit={onSubmit}
      />
      <CommunityList data={data} />
    </>
  );
};

export default CommunityContainer;
