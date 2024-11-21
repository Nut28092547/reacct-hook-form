import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = parseInt(formData.salary);
  let Incomeallyear = salary * 12 + parseInt(formData.bonus);
  let expenses = Incomeallyear * 0.5 <= 100000 ? Incomeallyear * 0.5 : 100000;
  let child = formData.children * 30000 <= 60000 ? formData.children * 30000 : 60000;
  let social = parseInt(formData.social);
  let insurance = parseInt(formData.jbo);
  let Deduction = 60000 + child + social + insurance;
  let Netassessableincome = Incomeallyear - Deduction - expenses;

  let tax = 0;
  if (Netassessableincome <= 100000) tax = 0;
  else if (Netassessableincome <= 300000) tax = 0.05;
  else if (Netassessableincome <= 1000000) tax = 0.1;
  else tax = 0.15;

  // ใช้ chatgpt ตกแต่ง Tailwind //
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-3xl font-semibold text-indigo-700 text-center mb-6">ผลลัพธ์การคำนวณภาษี</h1>
        <div className="space-y-5">
          <p className="text-xl text-gray-800">
            <strong>เงินได้ทั้งปี:</strong> {Incomeallyear.toLocaleString()} บาท
          </p>
          <p className="text-xl text-gray-800">
            <strong>ค่าใช้จ่าย:</strong> {expenses.toLocaleString()} บาท
          </p>
          <p className="text-xl text-gray-800">
            <strong>ค่าลดหย่อน:</strong> {Deduction.toLocaleString()} บาท
          </p>
          <p className="text-xl text-gray-800">
            <strong>เงินได้พึงประเมินสุทธิ:</strong> {Netassessableincome.toLocaleString()} บาท
          </p>
          <p className="text-xl text-gray-800">
            <strong>อัตราภาษี:</strong> {tax * 100}%
          </p>
          <p className="text-xl text-gray-800">
            <strong>ภาษีที่ต้องชำระ:</strong> {(Netassessableincome * tax).toLocaleString()} บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
