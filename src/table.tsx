
import { Table, Tag, Space, TableColumnsType } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  phoneNumber: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href='.'>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a href='.'>Invite {record.name}</a>
        <a href='.'>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'sungur',
    age: 22,
    address: 'Nekrasovo',
    tags: ['pretty nice', 'web-developer'],
    phoneNumber: '51515151515151515515',
  },
  {
    key: '2',
    name: 'vladik',
    age: 22,
    address: 'vnkha',
    tags: ['loser'],
    phoneNumber: '515815165165151616151',
  },
  {
    key: '3',
    name: 'VoVan',
    age: 23,
    address: 'pod_mostom ^_^',
    tags: ['sinner', 'punk'],
    phoneNumber: '52522525252522',
  },
  {
    key: '4',
    name: 'IGOR',
    age: 24,
    address: 'Salara',
    tags: ['GOD', 'mentor'],
    phoneNumber: '225151515151515',
  },
  {
    key: '5',
    name: 'shinshin',
    age: 22,
    address: 'VDNKHA',
    tags: ['bazed', 'stud'],
    phoneNumber: '1115252525225252',
  },
];

export const UsersTable = () => <Table columns={columns} dataSource={data} />;