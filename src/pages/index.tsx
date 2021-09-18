import type { InferGetStaticPropsType } from 'next'
import getAllproducts from '@framework/product/get-all-products'

export async function getStaticProps() {
  const products = await getAllproducts()

  console.log('prod', products)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 80
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>
}
