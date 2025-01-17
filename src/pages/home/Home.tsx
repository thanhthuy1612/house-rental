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

const mock: ISelected[] = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'Yiminghe', label: 'yiminghe' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
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
      <ListRoom title="DANH SÁCH PHÒNG" fetchData={fetchData} />
    </>
  );
};

export default Home;
