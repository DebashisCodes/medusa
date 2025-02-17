import { useMutation, UseMutationOptions, useQueryClient } from "react-query"
import { Response } from "@medusajs/medusa-js"

import {
  AdminPaymentCollectionDeleteRes,
  AdminPaymentCollectionsRes,
  AdminUpdatePaymentCollectionsReq,
} from "@medusajs/medusa"

import { buildOptions } from "../../utils/buildOptions"
import { useMedusa } from "../../../contexts"
import { adminPaymentCollectionQueryKeys } from "."

export const useAdminDeletePaymentCollection = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPaymentCollectionDeleteRes>,
    Error,
    void
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    () => client.admin.paymentCollections.delete(id),
    buildOptions(
      queryClient,
      [
        adminPaymentCollectionQueryKeys.detail(id),
        adminPaymentCollectionQueryKeys.lists(),
      ],
      options
    )
  )
}

export const useAdminUpdatePaymentCollection = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPaymentCollectionsRes>,
    Error,
    AdminUpdatePaymentCollectionsReq
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    (payload: AdminUpdatePaymentCollectionsReq) =>
      client.admin.paymentCollections.update(id, payload),
    buildOptions(
      queryClient,
      [
        adminPaymentCollectionQueryKeys.detail(id),
        adminPaymentCollectionQueryKeys.lists(),
      ],
      options
    )
  )
}

export const useAdminMarkPaymentCollectionAsAuthorized = (
  id: string,
  options?: UseMutationOptions<
    Response<AdminPaymentCollectionsRes>,
    Error,
    void
  >
) => {
  const { client } = useMedusa()
  const queryClient = useQueryClient()

  return useMutation(
    () => client.admin.paymentCollections.markAsAuthorized(id),
    buildOptions(
      queryClient,
      [
        adminPaymentCollectionQueryKeys.detail(id),
        adminPaymentCollectionQueryKeys.lists(),
      ],
      options
    )
  )
}
