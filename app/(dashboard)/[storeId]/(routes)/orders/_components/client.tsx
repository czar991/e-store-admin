'use client';

import { Separator } from '@/components/ui/separator';

import { columns, OrderColumn } from './columns';
import { Heading } from '@/components/Heading';
import { DataTable } from '@/components/data-table';

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading title={`Заказы (${data.length})`} description='Управление заказами вашего магазина' />
      <Separator />
      <DataTable searchKey='products' columns={columns} data={data} />
    </>
  );
};
