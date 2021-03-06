// Render Prop
//patient name, gender, age, sample collected on, sample id, Test done: blood sugar, blood pressure,
import React, { useRef, useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";
import { pinFileToIPFS } from "./Pinata";
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
  const fields = ["Wallet Address: ", "Age: ", "Sex: ", "Date: ", "Sample ID: ", "Blood Test Type: "];
  

  function formSubmit(){
    const doc = new jsPDF();
    var str = fields[0].concat(walletAddr.current.value+"\n");
    str += fields[1].concat(ageRef.current.value+"\n");
    str += fields[2].concat(sexRef.current.value+"\n");
    str += fields[3].concat(sampleCollectedOnRef.current.value+"\n");
    str += fields[4].concat(sampleIDref.current.value+"\n");
    str += fields[5].concat(typeRef.current.value+"\n");

    if(type==="cbc"){
      str += "WBC Count: ".concat(wbcRef.current.value+"\n");
      str += "RBC Count: ".concat(rbcRef.current.value+"\n");
      str += "Platelet Count: ".concat(platletRef.current.value+"\n");
      str += "Haemoglobin: ".concat(bloodGroupRef.current.value+"\n");
    }else{
      str += "Blood Group: ".concat(bloodGroupRef.current.value+"\n");
    }
    
    doc.text(str, 10, 10);
    doc.save("ReportForm.pdf");
    pinFileToIPFS();
  }

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
              placeholder="Platelet Count"
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
      <button type="submit" onClick={formSubmit} />
    </div>
  );
};

export default ReportForm;
