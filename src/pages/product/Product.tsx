import { Descriptions, Flex, Image, DescriptionsProps, Button } from 'antd';
import React from 'react';
import { useAppSelector } from '../../lib/hooks';
import ItemProduct, { List } from './ItemProduct';
import PriceProduct from './PriceProduct';

const Product: React.FC = () => {
  const { width } = useAppSelector((state) => state.login);

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Mô tả',
      children: '1111111111111111111111111111111111111111111111111111111111',
    },
    {
      key: '2',
      label: 'Địa chỉ',
      children: '12345',
    },
    {
      key: '3',
      label: 'Số người',
      children: 2,
    },
  ];

  const listIntroduce: List[] = [
    {
      title: 'TIỆN ÍCH PHÒNG',
      contents: ['Cửa sổ giếng trời', 'WC riêng', 'Wifi'],
    },
    {
      title: 'TIỆN NGHI PHÒNG',
      contents: ['Bàn ăn', 'Giường', 'Máy lạnh', 'Nệm', 'Tủ đồ', 'Tủ lạnh'],
    },
    {
      title: 'TIỆN NGHI TRONG NHÀ',
      contents: ['Camera', 'Để xe trong nhà', 'Khóa vân tay', 'Máy giặt chung', 'Thang bộ'],
    },
    {
      title: 'TIỆN ÍCH XUNG QUANH',
      contents: ['Chợ', 'Hàng quán ăn', 'Siêu Thị tiện lợi', 'Trung Tâm Thương Mại'],
    },
  ];
  return (
    <Flex className=" flex-col items-center py-[24px] px-[48px]">
      <div className=" underline text-[25px] font-[600] pb-[48px]">Phòng 1234</div>
      <Flex gap={20} wrap style={{ flexDirection: width < 500 ? 'column' : 'row' }}>
        <Image
          height={width < 800 ? 300 : 500}
          width={width < 800 ? 300 : 500}
          src={'https://randomuser.me/api/portraits/men/18.jpg'}
        />
        <Flex className=" flex-col justify-between" style={{ width: width < 800 ? '100%' : 'calc(100% - 520px)' }}>
          <Descriptions items={items} column={{ xs: 1, sm: 1, md: 2 }} />
          <ItemProduct list={listIntroduce} />
          <PriceProduct cost={4000000} electric=" 4k / kwh" water="150k" control="150k" bike="150k" />
        </Flex>
      </Flex>
      <Button type="primary" size='large' className="hover:!bg-colorSelect my-[24px]">
        Đặt lịch xem
      </Button>
    </Flex>
  );
};

export default Product;
