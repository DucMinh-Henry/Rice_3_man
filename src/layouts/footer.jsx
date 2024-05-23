import React from "react";
import iconFacebook from "../../public/svg/facebook.svg";
import iconTwitter from "../../public/svg/twitter.svg";
import iconInstagram from "../../public/svg/Instagram.svg";
import IconMap from "@/components/icons/IconMap";
import IconMail from "@/components/icons/IconMail";
import IconPhone from "@/components/icons/IconPhone";

const Footer = () => {
  return (
    <div className="page-container">
      <div className="grid grid-cols-4 gap-10 bg-[#007033] p-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Bảo đảm chất lượng
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">
              Sản phẩm đảm bảo chất lượng
            </span>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Giới Thiệu
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">Về Chúng Tôi</span>
            <span className="text-base text-[#f1f1f1]">Nguồn Gốc Sản Phẩm</span>
            <span className="text-base text-[#f1f1f1]">Liên Hệ</span>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Bảo đảm chất lượng
              </span>
            </div>
            <div className="flex gap-3 mb-2">
              <IconMap className={"text-[#fdc97d] w-7"}></IconMap>
              <span className="text-base text-[#f1f1f1]">
                Địa chỉ: 90 Thi Sách, P. Hòa Thuận Tây, Q. Hải Châu, Đà Nẵng
              </span>
            </div>
            <div className="flex gap-3 mb-2">
              <IconMail className={"text-[#fdc97d] w-5"}></IconMail>
              <div className="text-base text-[#f1f1f1]">
                <span>Email:</span>
                <span className="text-[#fdc97d] ml-2">
                  gaosieungon@gmail.com
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <IconPhone className={"text-[#fdc97d] w-5"}></IconPhone>
              <div className="text-base text-[#f1f1f1]">
                <span>Hotline:</span>
                <span className="text-[#fdc97d] ml-2">0343032993</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Giao hàng miễn phí
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">
              Giao hàng nhanh chóng và miễn phí
            </span>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Chính Sách
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">Liên Hệ</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Hỗ trợ khách hàng 24/7
              </span>
            </div>
            <div className="text-base text-[#f1f1f1]">
              <span>Mọi thông tin liên hệ hotline:</span>
              <span className="text-[#fdc97d] ml-2">0343032993</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Hướng Dẫn
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">Hướng Dẫn Mua Hàng</span>
            <span className="text-base text-[#f1f1f1]">Hướng Dẫn Đổi Trả</span>
            <span className="text-base text-[#f1f1f1]">
              Hướng Dẫn Kiểm Tra Đơn Hàng
            </span>
            <span className="text-base text-[#f1f1f1]">
              Hướng Dẫn Thanh Toán
            </span>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Kết nối với chúng tôi
              </span>
            </div>
            <div className="flex gap-3">
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconFacebook}
                    alt=""
                    className="w-5 h-5 text-[#d33535]"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconTwitter} alt="" className="w-5 h-5" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconInstagram} alt="" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Phương Thức Thanh Toán
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Hoàn trả hàng
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">
              Hoàn trả trong vòng 7 ngày
            </span>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-2">
              <div className="custom-element"></div>
              <span className="font-medium text-lg text-[#f1f1f1] ml-5">
                Hỗ Trợ Khách Hàng
              </span>
            </div>
            <span className="text-base text-[#f1f1f1]">Gửi Yêu Cầu Hỗ Trợ</span>
            <span className="text-base text-[#f1f1f1]">Hotline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
