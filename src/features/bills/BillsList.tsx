import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TheTable from "../../components/TheTable";
import { fetchBills } from "./billsSlice";

const BillsList = () => {
  const bills = useAppSelector((state) => state.bills.bills);
  const billsStatus = useAppSelector((state) => state.bills.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (billsStatus === "idle") {
      dispatch(fetchBills());
    }
  }, [billsStatus, dispatch]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="m-0 h-screen w-full p-0">
        <Header />
        <TheTable data={bills} />
      </div>
    </div>
  );
};

export default BillsList;
