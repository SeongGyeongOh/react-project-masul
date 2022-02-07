import React, { useCallback } from 'react';
import { Select } from 'antd';

const RoundSelect = ({ handleChange }: any) => {
  const { Option } = Select;

  return (
    <Select defaultValue={16} onChange={handleChange} style={{ display: 'block' }}>
      <Option value="8">8강</Option>
      <Option value="16">16강</Option>
      <Option value="32">32강</Option>
      <Option value="64">64강</Option>
    </Select>
  );
};

export default RoundSelect;
