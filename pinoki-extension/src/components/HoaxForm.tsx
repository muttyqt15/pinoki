import React from "react";
import LaporkanHoaxHeader from "./headings/LaporkanHoaxHeader";
import Form from "./forms/Form";
import { usePageContext } from "../context/PageContext";

const HoaxForm = () => {
    const {  updateCurrentPage } = usePageContext();
  const handleSubmit = () => {
    updateCurrentPage("hoaxSent");
  };
  const goBack = () => {
    updateCurrentPage("default");
  }
  return (
    <div>
      <LaporkanHoaxHeader handleGoback={goBack}/>
      <Form
        fields={[
          {
            name: "Judul Hoax",
            property: "judul-hoax",
            type: "text",
            placeholder: "Judul Hoax",
            required: true,
            value: "",
          },
          {
            name: "Deskripsi Kenyataan",
            property: "deskripsi-kenyataan",
            type: "text",
            placeholder: "Deskripsi Kenyataan",
            required: true,
            value: "",
          },
          {
            name: "Tautan Referensi",
            property: "tautan-referensi",
            type: "text",
            placeholder: "Referensi",
            required: true,
            value: "",
          },
        ]}
        onSubmit={handleSubmit}
        buttonPrompt="Kirim Laporan"
      />
      
    </div>
  );
};

export default HoaxForm;
