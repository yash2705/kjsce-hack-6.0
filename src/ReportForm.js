// Render Prop
//patient name, gender, age, sample collected on, sample id, Test done: blood sugar, blood pressure,
import React, { useRef, useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";

const ReportForm = () => {
  const walletAddr = useRef(null);
  const ageRef = useRef(null);
  const sexRef = useRef(null);
  const sampleCollectedOnRef = useRef(null);
  const sampleIDref = useRef(null);
  const typeRef = useRef(null);
  const wbcRef = useRef(null);
  const rbcRef = useRef(null);
  const platletRef = useRef(null);
  const haemoglobinRef = useRef(null);
  const bloodGroupRef = useRef(null);
  const [type, setType] = useState("cbc");
  return (
    <div className="flex flex-col space-y-4 max-w-4xl justify-center h-screen mx-auto bg-slate-100">
      <div className="text-center text-3xl font-semibold">
        Medical Report Details
      </div>
      <div className="flex items-center">
        <input
          ref={walletAddr}
          className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
          placeholder="Wallet Address"
        />
      </div>
      <div className="flex items-center">
        <input
          ref={ageRef}
          className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
          placeholder="Age"
          type={"number"}
        />
      </div>
      <div className="flex justify-around items-center">
        <div>
          <input
            type="radio"
            ref={sexRef}
            className="border border-black px-4 rounded-full bg-white mx-auto py-2"
            name="sex"
            value={"Male"}
          />
          <span>Male</span>
        </div>
        <div>
          <input
            type="radio"
            ref={sexRef}
            className="border border-black px-4 rounded-full bg-white mx-auto py-2"
            name="sex"
            value={"Female"}
          />
          <span>Female</span>
        </div>
        <div>
          <input
            type="radio"
            ref={sexRef}
            className="border border-black px-4 rounded-full bg-white mx-auto py-2"
            name="sex"
            value={"Other"}
          />
          <span>Other</span>
        </div>
      </div>
      <div className="flex items-center">
        <input
          ref={sampleCollectedOnRef}
          className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
          placeholder="Sample Collected On"
          type={"date"}
        />
      </div>
      <div className="flex items-center">
        <input
          ref={sampleIDref}
          className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
          placeholder="Sample ID"
        />
      </div>
      <div className="flex items-center">
        <select
          ref={typeRef}
          className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
          name="Type"
          defaultValue={"cbc"}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="cbc">CBC</option>
          <option value="bloodtest">Blood Test</option>
        </select>
      </div>
      {type === "cbc" && (
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              ref={wbcRef}
              className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
              placeholder="WBC Count"
            />
          </div>
          <div className="flex items-center">
            <input
              ref={rbcRef}
              className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
              placeholder="RBC Count"
            />
          </div>
          <div className="flex items-center">
            <input
              ref={platletRef}
              className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
              placeholder="Platlet Count"
            />
          </div>
          <div className="flex items-center">
            <input
              ref={haemoglobinRef}
              className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
              placeholder="Haemoglobin"
            />
          </div>
        </div>
      )}
      {type === "bloodtest" && (
        <div className="flex items-center">
          <input
            ref={bloodGroupRef}
            className="border border-black px-4 rounded-full bg-white w-4/5 mx-auto py-2"
            placeholder="Blood Group"
          />
        </div>
      )}
      <button type="submit" onClick={} />
    </div>
  );
};

export default ReportForm;
