'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { columns, SizeColumn } from './columns';
import { Heading } from '@/components/Heading';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/api-list';
import { DataTable } from '@/components/data-table';

interface SizesClientProps {
  data: SizeColumn[];
}

export const SizesClient: React.FC<SizesClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Размеры (${data.length})`} description='Управление размерами ваших товаров' />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' /> Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API запросы для размеров' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='sizeId' />
    </>
  );
};
