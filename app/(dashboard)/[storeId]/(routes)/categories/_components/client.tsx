'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { columns, CategoryColumn } from './columns';
import { Heading } from '@/components/Heading';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/api-list';
import { DataTable } from '@/components/data-table';

interface CategoriesClientProps {
  data: CategoryColumn[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Категории (${data.length})`} description='Управление категориями вашего раздела' />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className='mr-2 h-4 w-4' /> Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API запросы' />
      <Separator />
      <ApiList entityName='categories' entityIdName='categoryId' />
    </>
  );
};
