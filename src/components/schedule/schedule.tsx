import { Select } from 'antd';

const { Option } = Select;

const Schedule = () => {

  const onChange = (value: any) => {
    console.log('CHANGEEEE', value);
  }

  const onSearch = (value: string) => {
    console.log('SEARCHHHH', value);
  }

  return (
    <div>
      <h2>Seleccione el horario en el que desea recibir al cumpleañero en <strong>SU</strong> hogar.</h2>
      <Select
        showSearch
        size="large"
        style={{ width: 300 }}
        placeholder="Seleccione un horario"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option ? option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </div>
  );
}

export default Schedule;
