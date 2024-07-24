import { useEffect, useState } from "react";
import { Edit, MoreHorizontal, Trash, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Modal } from "@/components/ui/modal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import AccountUpdateForm from "./AccountUpdateForm";
import { AlertModal } from "@/components/shared/AlertModal";

const CellAction = ({ userId }) => {
  const { toast } = useToast();
  const [loading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const onClose = () => setIsOpen(false);
  const onCloseUpdate = () => setOpenUpdate(false);

  const onConfirm = async () => {
    try {
      // Delete employee
      await axios.delete(`http://localhost:8888/user/${userId}`);
      setOpen(false);
      toast({
        title: "Thành công",
        description: "Xóa tài khoản thành công",
      });
      // Fetch the updated product data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Thất bại",
        description: `Xóa tài khoản thất bại.`,
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      {/* Update Form Modal */}
      <Modal
        isOpen={openUpdate}
        onClose={onCloseUpdate}
        className={"!bg-background !px-1 min-w-[1120px]"}
        title="Cập nhật tài khoản"
        description="Xin vui lòng điền chi tiết bên dưới."
      >
        <ScrollArea className="h-[80dvh] px-6">
          <AccountUpdateForm modalClose={onCloseUpdate} userId={userId} />
        </ScrollArea>
      </Modal>
      <Button variant="default" size="icon" onClick={() => setOpenUpdate(true)}>
        <Edit className="" />
      </Button>
      <Button variant="default" size="icon" onClick={() => setOpen(true)}>
        <Trash className="" />
      </Button>
    </>
  );
};

export default CellAction;
