import { optional, z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productUpdateSchema = z.object({
  nameProduct: z.string().min(1, { message: "Vui lòng nhập tên sản phẩm" }),
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
  price: z.coerce
    .number()
    .int()
    .min(1, { message: "Vui lòng nhập giá sản phẩm" }),
  postingDate: z
    .string()
    .refine(
      (date) => {
        return new Date(date) < new Date();
      },
      {
        message: "Ngày bắt đầu không thể ở trong tương lai.",
      }
    )
    .refine((date) => date != null, { message: "birthDay is required" }),
});
