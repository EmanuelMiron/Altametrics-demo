import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-2/12 flex-col items-center justify-center bg-indigo-100">
      <p className="mb-8 ml-2 self-start text-lg text-gray-400">Menu</p>
      {[
        "Home",
        "Dashboard",
        "Invoices",
        "Bills",
        "Expenses",
        "Reports",
        "Accounting",
      ].map((name, idx) => (
        <div
          key={idx}
          className="flex w-11/12 items-center rounded-md py-1 pl-3 text-lg hover:cursor-pointer hover:bg-indigo-700 hover:text-white"
          onClick={() => navigate(`/${name}`)}
        >
          <KeyboardArrowRightIcon className="mr-2" />
          <p className="text-md">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
