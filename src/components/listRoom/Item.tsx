import { Button, Descriptions, DescriptionsProps, Flex, Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../lib/hooks';

export interface IItem {
  id?: string;
  src?: string;
  title?: string;
  description?: string;
  cost?: number;
  address?: string;
  people?: number;
  isMyAccount?: boolean;
}
const Item: React.FC<IItem> = (props) => {
  const [items, setItems] = React.useState<DescriptionsProps['items']>([]);
  const { width } = useAppSelector((state) => state.login);
  const { src, title, description, cost, address, people, isMyAccount } = props;

  const navigate = useNavigate();
  React.useEffect(() => {
    const initState = [
      {
        key: '1',
        label: 'Mô tả',
        children: description,
      },
      {
        key: '2',
        label: 'Địa chỉ',
        children: address,
      },
      {
        key: '3',
        label: 'Số người',
        children: people,
      },
    ];
    setItems(
      isMyAccount
        ? [
            ...initState,
            {
              key: '4',
              label: 'Giá',
              children: cost,
            },
          ]
        : initState,
    );
  }, []);

  const bookRoom = () => {
    navigate(`/product/${1}`);
  };
  return (
    <Flex
      className=" py-[10px] border-b-[2px] border-borderHeader"
      style={{ flexDirection: width < 500 ? 'column' : 'row' }}
      wrap
      gap={20}
    >
      <Image width={200} height={200} src={src} />
      <Flex className=" flex-col justify-between" style={{ width: width < 500 ? '100%' : 'calc(100% - 240px)' }}>
        <Descriptions
          title={
            <div
              className=" cursor-pointer w-fit text-[20px] font-[600] underline hover:text-colorSelect"
              onClick={bookRoom}
            >
              {title}
            </div>
          }
          items={items}
          column={{ xs: 1, sm: 1, md: 2 }}
        />
        {!isMyAccount ? (
          <Button type="primary" className=" w-[250px] hover:!bg-colorSelect" onClick={bookRoom}>
            <Flex>
              <div className=" px-[10px] border-r-bgColor border-r-[1px]">{(cost ?? 0) / 1000000} triệu / tháng</div>
              <div className=" px-[10px]">Đặt lịch xem</div>
            </Flex>
          </Button>
        ) : (
          <Flex gap={20}>
            <Button>Sửa</Button>
            <Button>Xóa</Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Item;
