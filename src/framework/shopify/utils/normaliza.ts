import { Product as ShopifyProduct, ImageEdge } from '../schema'
import { Product } from '@common/types/product'

const normalizeProductImage = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest
    }
  })

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    images: normalizeProductImage(imageConnection),
    ...rest
  }

  return product
}
