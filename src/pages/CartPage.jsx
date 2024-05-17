import React from "react";
import iconMinus from "public/svg/minus.svg";
import iconPlus from "public/svg/plus.svg";
import imgQR from "public/img/QR_code.png";
import Button from "@/components/button/Button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CartPage = () => {
  return (
    <div className="page-container">
      <div className="page-container grid grid-cols-10 gap-40 mb-10">
        <div className="grid col-start-1 col-end-7">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary rounded-2xl">
                <TableHead className="">SL No</TableHead>
                <TableHead className="">Thông tin Sản Phẩm</TableHead>
                <TableHead className="">Đơn Giá</TableHead>
                <TableHead className="">Số Lượng</TableHead>
                <TableHead className="">Thành Tiền</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="text-center">
                <TableCell>0</TableCell>
                <TableCell>
                  <img
                    src="https://th.bing.com/th/id/R.48a4647e54824506d03576d72fa2be31?rik=xytOa7Tkbnm2nQ&riu=http%3a%2f%2fiwater.vn%2fImage%2fPicture%2fGao%2fGao-ST25-iWater.jpg&ehk=hDlxWMCrxErzmjmnFRccNIfn9IVDqrD7N90AvUeeRqk%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                    className="m-auto w-[150px]"
                  />
                  <span>Gạo việt nam T25</span>
                </TableCell>
                <TableCell>200.000đ</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-3">
                    <img src={iconMinus} alt="" />
                    <span>0</span>
                    <img src={iconPlus} alt="" />
                  </div>
                </TableCell>
                <TableCell>1.200.000đ</TableCell>
                <TableCell>
                  <Button
                    type="submit"
                    kind="button"
                    className="px-3 py-1 rounded-md m-auto"
                  >
                    Mua
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className="text-center">
                <TableCell>0</TableCell>
                <TableCell>
                  <img
                    src="https://th.bing.com/th/id/R.48a4647e54824506d03576d72fa2be31?rik=xytOa7Tkbnm2nQ&riu=http%3a%2f%2fiwater.vn%2fImage%2fPicture%2fGao%2fGao-ST25-iWater.jpg&ehk=hDlxWMCrxErzmjmnFRccNIfn9IVDqrD7N90AvUeeRqk%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                    className="m-auto w-[150px]"
                  />
                  <span>Gạo việt nam T25</span>
                </TableCell>
                <TableCell>200.000đ</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center gap-3">
                    <img src={iconMinus} alt="" />
                    <span>0</span>
                    <img src={iconPlus} alt="" />
                  </div>
                </TableCell>
                <TableCell>1.200.000đ</TableCell>
                <TableCell>
                  <Button
                    type="submit"
                    kind="button"
                    className="px-3 py-1 rounded-md m-auto"
                  >
                    Mua
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-end mt-5">
            <Button
              type="button"
              kind="button"
              href="/product"
              className="px-3 py-2 rounded-md"
            >
              Xem sản phẩm khác
            </Button>
          </div>
        </div>
        <div className="grid col-start-7 col-end-11">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex gap-3 justify-center items-center text-xl font-semibold bg-secondary h-12 rounded-lg">
              <span>Tổng tiền:</span>
              <span className="text-[#FF8E00]">3000000 đ</span>
            </div>
            <div className="w-full flex gap-3 justify-center items-center">
              <img src={imgQR} alt="" />
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                type="button"
                kind="button"
                className="px-5 py-2 rounded-md "
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
