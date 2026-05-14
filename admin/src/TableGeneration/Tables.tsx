import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { api } from "../services/api";

const Tables = () => {
  const [tableNumber, setTableNumber] =
    useState("");

  const [tables, setTables] = useState([]);

  const fetchTables = async () => {
    try {
      const response = await api.get("/tables");

      setTables(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleCreateTable = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await api.post("/tables", {
        tableNumber: Number(tableNumber),
      });

      setTableNumber("");

      fetchTables();
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Tables Management
      </h1>

      <form
        onSubmit={handleCreateTable}
        className="flex gap-4 mb-10"
      >
        <input
          type="number"
          placeholder="Enter Table Number"
          value={tableNumber}
          onChange={(e) =>
            setTableNumber(e.target.value)
          }
          className="border p-3 rounded-lg"
        />

        <button
          className="bg-orange-500 text-white px-6 rounded-lg"
        >
          Create Table
        </button>
      </form>

      <div className="grid grid-cols-3 gap-6">
        {tables.map((table: any) => {
          const qrValue = `http://localhost:5174/menu/${table.token}`;

          return (
            <div
              key={table.id}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                Table {table.tableNumber}
              </h2>

              <QRCodeCanvas
                value={qrValue}
                size={200}
              />

              <p className="mt-4 text-sm break-all">
                {qrValue}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tables;