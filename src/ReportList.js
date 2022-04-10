import React from "react";
import { FcDocument } from "react-icons/fc";

const ReportList = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="min-h-screen w-full bg-slate-100 space-y-4 pt-12">
      <input
        className="flex items-center justify-between w-3/5 mx-auto bg-white rounded-xl px-4 py-2 border border-slate-300 focus:outline-none focus:border-none"
        placeholder="Wallet Address"
      />
      <div className="space-y-4 pb-12">
        {arr.map((a) => {
          return (
            <div className="flex items-center justify-between w-3/5 mx-auto bg-white rounded-xl px-4 py-2 border border-slate-300 hover:cursor-pointer">
              <FcDocument />
              <div>
                <div className="font-semibold text-medium">
                  Oxgdjsfjkseyiq8i8wo9p
                </div>
                <div className="text-sm">Oxgdjsfjkseyiq8i8wo9p</div>
              </div>
              <div>
                <div>10-04-2022</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportList;
