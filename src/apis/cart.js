import http from '@/utils/http'
// 加入购物车

export const insertCartAPI = ({ skuId, count }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//获取购物车列表
export const FindCartAPI = (ids) => {
  return http({
    url: '/member/cart',
    data: {
      ids
    }
  })
}
// 删除购物车
export const delCartAPI = (ids) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

