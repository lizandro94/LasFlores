import React from 'react';
import { Select } from "antd";

const MembersSelect = ({ membersList, onChange }) => {
    const { Option } = Select;

    return (
        <Select
            style={{ width: 300, marginRight: 10 }}
            placeholder="Nombre"
            showSearch
            onChange={onChange}
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            {membersList.map(member =>
                <Option key={member.id} value={member.id}>
                    {member.name}
                </Option>
            )}
        </Select>
    );
};

export default MembersSelect;