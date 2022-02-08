import React, { useState, useEffect } from 'react';
import CommunityInput from '../components/Community/Input/CommunityInput';
import CommunityList from '../components/Community/List/CommunityList';
import { useDispatch, useSelector } from 'react-redux';
import { addPostRequest, deletePostRequest, loadPostRequest } from '../modules/reducers/post';
import { RootState } from '../modules/reducers';

const CommunityContainer = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.post.data);
  const login = useSelector((state: RootState) => state.login);
  const { nickname, userId } = login;

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const clickAddPost = () => {
    dispatch(addPostRequest(title, content, nickname, userId));
    setTitle('');
    setContent('');
  };

  const clickDeletePost = (id: number) => {
    dispatch(deletePostRequest(id));
  };

  useEffect(() => {
    dispatch(loadPostRequest());
  }, []);

  return (
    <>
      <CommunityInput
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        clickAddPost={clickAddPost}
        nickname={nickname}
      />
      {data.length > 0 ? (
        <CommunityList data={data} clickDeletePost={clickDeletePost} userId={userId} />
      ) : (
        <div>리스트 데이터가 없습니다.</div>
      )}
    </>
  );
};

export default CommunityContainer;
