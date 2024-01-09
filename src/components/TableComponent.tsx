import { Table, Button } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { useState, useEffect } from "react";
import axios from 'axios';


 const  TableComponent = () =>{
 
    interface DataType {
        country: string;
        name: string;
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: 'Страна',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'Название школы',
          dataIndex: 'name',
          key: 'name',
        },
      ]
      
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const offset = 1;
  const LIMIT_LIST_SCHOOL = 10; 



      const getUniversity = async (page: number, limit: number) => {
        const response = await axios.get(`http://universities.hipolabs.com/search?offset=${(page - 1) * limit}&limit=${10}`)
        setDataSource(response.data);    
    }

useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL)
}, [page])

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
      {page > 1 ? <Button onClick={() => setPage(page - 1)} disabled={!offset}>Назад</Button> : ''}
      
      <Button onClick={() => setPage(page + 1)}>Вперед</Button>
      <span>{page}</span>
    </div>
    
  )
}

export default TableComponent