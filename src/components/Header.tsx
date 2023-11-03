import { Breadcrumbs, Link, Avatar } from "@mui/material";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocation } from "react-router-dom";
import Bill_InvoiceDetailPopup from "../features/detailedPopup/Bill_InvoiceDetailPopup";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="header flex h-24 w-full items-center justify-between border-b-2 p-5">
        <div className="flex w-72 items-center justify-between">
          <FormatAlignRightIcon
            sx={{ width: "1.25em", height: "1.25em" }}
            className="rounded-lg bg-indigo-100 p-1 hover:cursor-pointer"
          />
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Accounting
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href={location.pathname}
              aria-current="page"
            >
              {location.pathname[1].toUpperCase() + location.pathname.slice(2)}
            </Link>
          </Breadcrumbs>
        </div>
        <div className="flex w-40 items-center justify-between">
          <LightModeOutlinedIcon className="hover:cursor-pointer" />
          <SettingsOutlinedIcon className="hover:cursor-pointer" />
          <NotificationsNoneOutlinedIcon className="hover:cursor-pointer" />
          <Avatar>H</Avatar>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="self-end p-5 w-32 flex justify-between">
          <PrintOutlinedIcon className="hover:cursor-pointer" />
          <SettingsOutlinedIcon className="hover:cursor-pointer" />
          <EditOutlinedIcon className="hover:cursor-pointer" />
        </div>
      </div>
      <Bill_InvoiceDetailPopup />
    </>
  );
};

export default Header;
