// Render Prop
//patient name, gender, age, sample collected on, sample id, Test done: blood sugar, blood pressure,
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";
import { useRef } from "react";
//import {jsPDF} from jsPDF;

const ReportForm = () => {
  // const walletAddr = useRef(null);
  // const ageRef = useRef(null);
  // const sexRef = useRef(null);
  // const sample_collectedRef = useRef(null);
  // const sampleIDref = useRef(null);
  // const testDoneRef = useRef(null);
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: 50,
            paddingLeft: 30,
            fontSize: 30,
          }}
          className="z-50 relative"
        >
          {"Medical Report Details:-"}
        </div>
        <div className="z-50 absolute" style={{ textAlign: "center" }}>
          <Formik
            initialValues={{
              age: "",
              sex: undefined,
              walletAddr: undefined,
              sampleCollectedOn: undefined,
              testDone: undefined,
            }}
            // onSubmit={(values, { setSubmitting }) => {
            //   setTimeout(() => {
            //     alert(
            //       JSON.stringify(
            //         (values.age, values.sampleCollectedOn, values.sex),
            //         null,
            //         2
            //       )
            //     );
            //     // alert(walletAddr.current.value);
            //     JSON.stringify();
            //     setSubmitting(false);
            //   }, 400);
            // }}
            onSubmit={async (values, { setSubmitting }) => {
              await new Promise((r) => setTimeout(r, 500));
              var str = JSON.stringify(values, null, 2);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: 50,
                  }}
                >
                  <label style={{ padding: 20, height: 20 }}>
                    Wallet Address: &emsp;
                  </label>
                  <Field
                    name="walletAddr"
                    type="text"
                    // ref={walletAddr}
                    id="walletAddr"
                  />
                  <label style={{ padding: 20 }}>Age: &emsp;</label>
                  <Field
                    type="number"
                    min={1}
                    style={{ padding: 20, height: 20 }}
                    // ref={ageRef}
                    name="age"
                  />
                  <br></br>
                  <br></br>
                  <label style={{ padding: 20 }}>Sex:</label>&emsp;
                  <Field
                    type="radio"
                    id="female"
                    name="sex"
                    value="Female"
                    style={{ padding: 20 }}
                    // ref={sexRef}
                  />
                  <label style={{ padding: 20 }}> Female</label>
                  &emsp;
                  <Field
                    type="radio"
                    id="male"
                    name="sex"
                    // ref={sexRef}
                    value="Male"
                    style={{ padding: 20 }}
                  />
                  <label style={{ padding: 20 }}> Male</label>
                  &emsp;
                  <Field
                    type="radio"
                    id="others"
                    name="sex"
                    value="Others"
                    // ref={sexRef}
                    style={{ padding: 20 }}
                  />
                  <label style={{ padding: 20 }}> Others</label>
                  <br></br>
                  <br></br>
                  <label style={{ padding: 20 }}>Sample Collected on: </label>
                  <Field
                    name="sampleCollectedOn"
                    type="date"
                    id="sampleCollectedOn"
                    style={{ padding: 20 }}
                    // ref={sample_collectedRef}
                  />
                  <br></br>
                  <label style={{ padding: 20 }}>Sample ID:</label>
                  <Field
                    type="text"
                    name="sampleID"
                    // ref={sampleIDref}
                    style={{ padding: 20, height: 20 }}
                  />
                  <br></br>
                  <br></br>
                  <label style={{ padding: 20 }}>Test Done:</label>
                  <select
                    name="testDone"
                    id="testDone"
                    // ref={testDoneRef}
                  >
                    <option value="Blood Test">Blood test</option>
                    <option value="CBC">CBC</option>
                  </select>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ReportForm;
