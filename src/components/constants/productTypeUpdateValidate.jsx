import { z } from "zod";

export const productTypeUpdateSchema = z.object({
  idType: z.coerce
    .number()
    .int()
    .min(1, { message: "Vui lòng nhập id sản phẩm" }),
  nameType: z.string().min(1, { message: "Vui lòng nhập tên sản phẩm" }),
  order: z.coerce
    .number()
    .min(1, { message: "Vui lòng nhập thứ tự thương hiệu" }),
  slug: z
    .string()
    .min(3, { message: "Vui lòng nhập slug" })
    .regex(/^[a-z0-9-]+$/, {
      message:
        "Slug không hợp lệ. Chỉ chấp nhận ký tự thường, số và dấu gạch ngang",
    })
    .refine((value) => !value.includes(" "), {
      message: "Slug không được chứa khoảng trắng",
    }),
});
