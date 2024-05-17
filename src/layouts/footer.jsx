import React from "react";
import iconFacebook from "../../public/svg/facebook.svg";
import iconTwitter from "../../public/svg/twitter.svg";
import iconInstagram from "../../public/svg/Instagram.svg";

const Footer = () => {
  return (
    <div className="page-container">
      <div className="grid grid-cols-4 bg-[#FADAB3] p-5 rounded-tr-lg rounded-tl-lg">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Bảo đảm chất lượng</span>
            <span className="text-base text-[#696969]">
              Sản phẩm đảm bảo chất lượng
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Giới Thiệu</span>
            <span className="text-base text-[#696969]">Về Chúng Tôi</span>
            <span className="text-base text-[#696969]">Nguồn Gốc Sản Phẩm</span>
            <span className="text-base text-[#696969]">Liên Hệ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Bảo đảm chất lượng</span>
            <span className="text-base text-[#696969]">
              Địa chỉ: 90 Thi Sách, P. Hòa Thuận Tây, Q. Hải Châu, Đà Nẵng
            </span>
            <span className="text-base text-[#696969]">
              Email: sieunhangao@gmail.com
            </span>
            <span className="text-base text-[#696969]">Hotline: 19001010</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Giao hàng miễn phí</span>
            <span className="text-base text-[#696969]">
              Giao hàng nhanh chóng và miễn phí
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Chính Sách</span>
            <span className="text-base text-[#696969]">Liên Hệ</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Hỗ trợ khách hàng 24/7</span>
            <span className="text-base text-[#696969]">
              Mọi thông tin liên hệ hotline: 19001010
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Hướng Dẫn</span>
            <span className="text-base text-[#696969]">Hướng Dẫn Mua Hàng</span>
            <span className="text-base text-[#696969]">Hướng Dẫn Đổi Trả</span>
            <span className="text-base text-[#696969]">
              Hướng Dẫn Kiểm Tra Đơn Hàng
            </span>
            <span className="text-base text-[#696969]">
              Hướng Dẫn Thanh Toán
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Kết nối với chúng tôi</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={iconFacebook}
                  alt=""
                  className="w-5 h-5 text-[#3C5A9A]"
                />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconTwitter} alt="" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconInstagram} alt="" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Phương Thức Thanh Toán</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Hoàn trả hàng</span>
            <span className="text-base text-[#696969]">
              Hoàn trả trong vòng 7 ngày
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-lg">Hỗ Trợ Khách Hàng</span>
            <span className="text-base text-[#696969]">Gửi Yêu Cầu Hỗ Trợ</span>
            <span className="text-base text-[#696969]">Hotline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
