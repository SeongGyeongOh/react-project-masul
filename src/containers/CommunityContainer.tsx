import React, { useState, useEffect } from 'react';
import CommunityInput from '../components/Community/Input/CommunityInput';
import CommunityList from '../components/Community/List/CommunityList';
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequest, deletePostRequest } from '../modules/reducers/post';
import { RootState } from '../modules/reducers';

const CommunityContainer = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [key, setKey] = useState(1);

  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.post.data);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const clickAddPost = () => {
    const result = {
      key: key, // key
      title: title, // 제목
      content: content, // 내용
      nickName: 'wjdgksak', // 닉네임
      date: '2022-01-27 15:42', // 등록일
    };
    dispatch(addPostRequest(result));
    setKey(key + 1);
    setTitle('');
    setContent('');
  };

  const clickDeletePost = (key: number) => {
    dispatch(deletePostRequest(key));
  };

  return (
    <>
      <CommunityInput
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        clickAddPost={clickAddPost}
      />
      {data.length > 0 ? (
        <CommunityList data={data} clickDeletePost={clickDeletePost} />
      ) : (
        <div>리스트 데이터가 없습니다.</div>
      )}
    </>
  );
};

export default CommunityContainer;
