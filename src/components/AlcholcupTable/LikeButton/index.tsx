import React, { useCallback, useState } from 'react';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type LikeProps = {
  isChecked: boolean;
  notice: string;
};

const LikeBtn = styled.div`
  .button {
    cursor: pointer;
    transition: transform 300ms ease;
    font-size: 100px;
  }
  .red {
    color: red;
  }
  h3 {
    height: 30px;
    width: 100px;
  }
  .button:hover {
    transform: scale(1.1);
  }
`;

const LikeButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [notice, setNotice] = useState('');

  const onLikeBtn = () => {
    !isChecked ? !setIsChecked && setNotice('') : setNotice('좋아요 1회');
  };

  return (
    <LikeBtn>
      <div className="icons-list">
        {isChecked ? (
          <HeartFilled className="button red" style={{ color: 'red', fontSize: '100px' }} onClick={onLikeBtn} />
        ) : (
          <HeartOutlined className="button" style={{ fontSize: '100px' }} onClick={onLikeBtn} />
        )}
        <h3>{notice}</h3>
      </div>
    </LikeBtn>
  );
};

export default LikeButton;
