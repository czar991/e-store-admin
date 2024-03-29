'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { ProductColumn, columns } from './columns';
import { Heading } from '@/components/Heading';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/data-table';
import { ApiList } from '@/components/api-list';

interface ProductsClientProps {
  data: ProductColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={`Товары (${data.length})`} description='Управление товарами вашего раздела' />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className='mr-2 h-4 w-4' /> Добавить
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API Calls for Products' />
      <Separator />
      <ApiList entityName='products' entityIdName='productId' />
    </>
  );
};
