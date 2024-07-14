import React from 'react';
import Filter from '../../components/filter/Filter';
import ListRoom from '../../components/listRoom/ListRoom';
import { useAppDispatch } from '../../lib/hooks';
import {
  resetStateListRoom,
  updateIsLoadingListFilter,
  updateListCost,
  updateListLocation,
  updateListType,
} from '../../lib/features/listRoom';
import { useListRoom } from '../../utils/useListRoom';
import { ISelected } from '../../interface/ISelected';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

const mock: ISelected[] = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'Yiminghe', label: 'yiminghe' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];
const MyRoom: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { fetchData } = useListRoom();
  React.useEffect(() => {
    const initData = () => {
      dispatch(resetStateListRoom());
      dispatch(updateIsLoadingListFilter(true));
      dispatch(updateListCost(mock));
      dispatch(updateListLocation(mock));
      dispatch(updateListType(mock));
      dispatch(updateIsLoadingListFilter(false));
      fetchData(true);
    };
    initData();
  }, []);

  return (
    <>
      <Filter />
      <Button icon={<PlusOutlined />} className=" mt-[24px] mx-[48px]" size="large" onClick={() => navigate('/create')}>
        Thêm phòng mới
      </Button>
      <ListRoom isMyAccount={true} title="DANH SÁCH PHÒNG QUẢN LÝ" fetchData={fetchData} />
    </>
  );
};

export default MyRoom;
