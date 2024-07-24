import { optional, z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productSchema = z.object({
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
  urlImage: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  describe: z.string().min(1, { message: "Vui lòng nhập mô tả sản phẩm" }),
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
  anHien: z.enum(["1", "0"], {
    message: "Vui lòng chọn trạng thái nổi bật",
  }),
  noiBat: z.enum(["1", "0"], {
    message: "Vui lòng chọn trạng thái nổi bật",
  }),
  ProductType_idType: z.coerce
    .number()
    .int()
    .min(1, { message: "Vui lòng chọn loại sản phẩm" }),
  Brand_idBrand: z.coerce
    .number()
    .int()
    .min(1, { message: "Vui lòng chọn thương hiệu" }),
});
