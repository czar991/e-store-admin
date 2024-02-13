'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { columns, BillboardColumn } from './columns';
import { Heading } from '@/components/Heading';
import { ApiList } from '@/components/api-list';
import { DataTable } from '@/components/data-table';

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient = ({ data }: BillboardClientProps) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Баннеры (${data.length})`} description='Управление баннерами вашего раздела' />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className='mr-2 h-4 w-4' /> Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='label' columns={columns} data={data} />
      <Heading title='API' description='API запросы' />
      <Separator />
      <ApiList entityName='billboards' entityIdName='billboardId' />
    </>
  );
};
