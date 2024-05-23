import React, { useContext, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { Cart } from "@/components/context/CartContext";
import IconMinus from "@/components/icons/IconMinus";
import IconPlus from "@/components/icons/IconPlus";
import IconAlert from "@/components/icons/IconAlert";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(Cart);

  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity || acc + item.price * 1,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) }
          : item
      )
    );
  };

  return (
    <div className="page-container">
      <div className="grid grid-cols-10 gap-40 mb-10">
        <div className="col-start-1 col-end-7">
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="bg-[#007033] text-white">
                <TableHead>SL No</TableHead>
                <TableHead>Thông tin Sản Phẩm</TableHead>
                <TableHead>Đơn Giá</TableHead>
                <TableHead>Số Lượng</TableHead>
                <TableHead>Thành Tiền</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <TableRow key={item.id} className="text-center">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <div className="m-auto max-w-[200px]">
                        <img src={item.url} alt={item.name} className="mb-3" />
                        <span className="font-semibold">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-primary font-bold">
                        {VNDDong.format(item.price)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center items-center m-auto w-[75px] border">
                        <div className="px-1 border-r cursor-pointer bg-[#f8f8f8]">
                          <IconMinus
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-4"
                          />
                        </div>
                        <div className="w-6 text-center">
                          <span className="">{item.quantity || 1}</span>
                        </div>
                        <div className="px-1 border-l cursor-pointer bg-[#f8f8f8]">
                          <IconPlus
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-4"
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-primary font-bold">
                        {VNDDong.format(
                          item.price * item.quantity || item.price * 1
                        )}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        kind="button"
                        className="flex items-center justify-center font-semibold p-1 bg-[#007033] hover:bg-[#fdc97d] hover:text-[#007033]"
                        onClick={() => {
                          setCart(cart.filter((c) => c.id !== item.id));
                        }}
                      >
                        <span className="px-1 border border-solid border-white hover:border-[#007033]">
                          Xóa
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan="6"
                    className="text-center text-lg font-semibold"
                  >
                    No items in cart
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex justify-end mt-5">
            <Button
              type="button"
              kind="button"
              href="/products"
              className="flex items-center justify-center p-1 bg-[#007033] hover:bg-[#fdc97d] hover:text-[#007033]"
            >
              <span className="px-4 border border-solid border-white hover:border-[#007033] leading-10">
                Xem sản phẩm khác
              </span>
            </Button>
          </div>
        </div>
        <div className="col-start-7 col-end-11">
          <div className="w-full flex flex-col gap-10 bg-white">
            <div className="w-full flex gap-3 justify-center items-center text-xl font-semibold bg-[#007033] text-white h-12">
              <span>THÀNH TIỀN</span>
            </div>
            <div className="flex flex-col gap-3 py-3 px-5 text-[#6b6b6b] border border-y-[#ccc] text-justify">
              <div className="flex items-center gap-1">
                <span>PHÍ VẬN CHUYỂN</span>
                <IconAlert className={"w-4 h-4"}></IconAlert>
              </div>
              <span>
                Phí vận chuyển tùy theo khu vực số lượng hàng mà có thể thay đổi
              </span>
              <span>
                Gạo A An cam kết thời gian giao hàng 30 phút được tính từ lúc
                nhân viên Chăm sóc khách hàng (CSKH) xác nhận đơn hàng thành
                công. Được áp dụng trong khu vực nội thành TP. HCM, Hà Nội, Đà
                Nẵng.
              </span>
              <span className="text-black font-bold">
                Vận chuyển trong ngày
              </span>
              <span className="text-black font-bold"></span>
            </div>
            <div className="w-full flex gap-5 flex-col justify-center items-center mb-5">
              <div className="flex justify-between items-center text-lg font-bold w-full px-5">
                <span>Tổng chi phí:</span>
                <span className="text-primary text-2xl">
                  {total.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
              <Link to={"/payment"}>
                <Button
                  type="button"
                  kind="button"
                  href="/payment"
                  className="flex items-center justify-center p-1 bg-[#007033] hover:bg-[#fdc97d] hover:text-[#007033]"
                >
                  <span className="px-4 border border-solid border-white hover:border-[#007033] leading-10">
                    Thanh toán
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
