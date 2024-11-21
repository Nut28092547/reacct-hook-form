import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  // ใช้ chatgpt ตกแต่ง Tailwind //
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-indigo-700 text-center mb-6">คำนวณภาษี</h1>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <label htmlFor="salary" className="block text-lg text-gray-700 font-medium mb-2">
              เงินเดือน:
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              onChange={handleChange}
              className="w-full border-2 border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ระบุเงินเดือน"
            />
          </div>
          <div>
            <label htmlFor="bonus" className="block text-lg text-gray-700 font-medium mb-2">
              โบนัส:
            </label>
            <input
              type="text"
              name="bonus"
              onChange={handleChange}
              className="w-full border-2 border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ระบุโบนัส"
            />
          </div>
          <div>
            <label htmlFor="social" className="block text-lg text-gray-700 font-medium mb-2">
              หักประกันสังคมต่อเดือน:
            </label>
            <input
              type="text"
              name="social"
              id="social"
              onChange={handleChange}
              className="w-full border-2 border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ระบุประกันสังคม"
            />
          </div>
          <div>
            <label htmlFor="children" className="block text-lg text-gray-700 font-medium mb-2">
              จำนวนบุตร:
            </label>
            <input
              type="text"
              name="children"
              id="children"
              onChange={handleChange}
              className="w-full border-2 border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ระบุจำนวนบุตร"
            />
          </div>
          <div>
            <label htmlFor="jbo" className="block text-lg text-gray-700 font-medium mb-2">
              ค่าเบี้ยประกันชีวิต:
            </label>
            <input
              type="text"
              name="jbo"
              id="job"
              onChange={handleChange}
              className="w-full border-2 border-indigo-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ระบุค่าเบี้ยประกันชีวิต"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          >
            คำนวณภาษี
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
