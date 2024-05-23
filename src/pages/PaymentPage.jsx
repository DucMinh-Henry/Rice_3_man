import Button from "@/components/button/Button";
import { Cart } from "@/components/context/CartContext";
import IconBack from "@/components/icons/IconBack";
import IconLogo from "@/components/icons/IconLogo";
import { Label } from "@/components/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TableRow } from "@/components/ui/table";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const { cart } = useContext(Cart);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [total, setTotal] = useState(0);
  console.log(cart);

  const VNDDong = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity ? item.price * item.quantity : item.price;
    });
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div className="page-container grid gap-5 py-5 grid-cols-10">
      <div className="grid col-start-1 col-end-7 bg-white p-5">
        <Link to={"/"}>
          <IconLogo></IconLogo>
        </Link>
        <h2 className="text-lg font-medium my-10 text-[#053024]">
          Thông tin nhận hàng
        </h2>
        <div className="mb-5">
          <Label>Email</Label>
          <Input type="email" placeholder="" className="mt-2" />
        </div>
        <div className="mb-5">
          <Label>Họ tên</Label>
          <Input type="text" placeholder="" className="mt-2" />
        </div>
        <div className="mb-5">
          <Label>Số điện thoại</Label>
          <Input type="number" placeholder="" className="mt-2" />
        </div>
        <div className="mb-5">
          <Label>Địa chỉ</Label>
          <Input type="text" placeholder="" className="mt-2" />
        </div>
        {/* <div className="mb-5">
          <div>
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)}
            />
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
            />
          </div>
        </div> */}
        <h2 className="text-lg font-medium my-10 text-[#053024]">Thanh toán</h2>
        <RadioGroup defaultValue="1" className="flex gap-5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r1" />
            <span>Thanh toán sau khi nhận hàng</span>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r2" />
            <span>Thanh toán online</span>
          </div>
        </RadioGroup>
      </div>
      <div className="grid col-start-7 col-end-11 bg-white">
        <div className="p-5">
          <div className="py-5 w-full border-b-2 border-[#053024]">
            <span className="text-lg text-[#053024] font-medium">
              Thông tin nhận hàng ( sản phẩm )
            </span>
          </div>
          <div className="flex flex-col gap-3 pt-5 border-b-2 border-[#053024]">
            {cart.length > 0 ? (
              cart.map((item) => (
                <TableRow>
                  <div className="flex justify-between items-center">
                    <img
                      src={item.url}
                      alt=""
                      className="w-20 h-20 rounded-md"
                    />
                    <span className="w-72 leading-7">{item.name}</span>
                    <span>
                      {VNDDong.format(
                        item.quantity ? item.price * item.quantity : item.price
                      )}
                    </span>
                  </div>
                </TableRow>
              ))
            ) : (
              <div className="text-center text-lg font-semibold">
                No items in cart
              </div>
            )}
          </div>
          <div className="flex flex-col gap-10 py-10">
            <div className="flex justify-between">
              <span className="text-2xl font-medium">Tổng cộng</span>
              <span className="text-2xl font-medium text-primary">
                {VNDDong.format(total)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <Link to={"/carts"}>
                <div className="flex gap-3 justify-between items-center hover:text-orange-400 cursor-pointer">
                  <IconBack></IconBack>
                  <span>Quay về trang đặt hàng</span>
                </div>
              </Link>
              <Button
                kind="button"
                className="flex items-center justify-center p-1 bg-[#007033] hover:bg-[#fdc97d] hover:text-[#007033]"
              >
                <span className="px-4 border border-solid border-white hover:border-[#007033] leading-10">
                  Đặt mua
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
