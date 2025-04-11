import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const AutoSuggest = ({ isClear, selectedProvince, onDistrictQueryChange }) => {
  useEffect(() => {
    setSelectedDistrict("");
    setDistrictQuery("");
    setSuggestedSubdistricts("");
    setSubdistrictQuery("");
  }, [isClear]);
  const districts_bkk = [
    {
      district: "พระนคร",
      subdistricts: [
        "พระบรมมหาราชวัง",
        "วังบูรพาภิรมย์",
        "สำราญราษฎร์",
        "ศาลเจ้าพ่อเสือ",
        "เสาชิงช้า",
        "บวรนิเวศ",
        "ตลาดยอด",
        "ชนะสงคราม",
        "บ้านพานถม",
        "บางขุนพรหม",
        "วัดสามพระยา",
      ],
    },
    {
      district: "ดุสิต",
      subdistricts: [
        "ดุสิต",
        "วชิรพยาบาล",
        "สวนจิตรลดา",
        "สี่แยกมหานาค",
        "ถนนนครไชยศรี",
      ],
    },
    {
      district: "หนองจอก",
      subdistricts: [
        "กระทุ่มราย",
        "หนองจอก",
        "คลองสิบ",
        "คลองสิบสอง",
        "โคกแฝด",
        "คู้ฝั่งเหนือ",
        "ลำผักชี",
        "ลำต้อยติ่ง",
      ],
    },
    {
      district: "บางรัก",
      subdistricts: ["มหาพฤฒาราม", "สีลม", "สุริยวงศ์", "บางรัก", "สี่พระยา"],
    },
    {
      district: "บางเขน",
      subdistricts: ["อนุสาวรีย์", "ท่าแร้ง"],
    },
    {
      district: "บางกะปิ",
      subdistricts: ["คลองจั่น", "หัวหมาก"],
    },
    {
      district: "ปทุมวัน",
      subdistricts: ["ปทุมวัน", "รองเมือง", "วังใหม่", "ลุมพินี"],
    },
    {
      district: "ป้อมปราบศัตรูพ่าย",
      subdistricts: ["ป้อมปราบ", "วัดเทพศิรินทร์", "คลองมหานาค", "บ้านบาตร"],
    },
    {
      district: "พระโขนง",
      subdistricts: ["บางจาก"],
    },
    {
      district: "ลาดพร้าว",
      subdistricts: ["ลาดพร้าว", "จรเข้บัว"],
    },
    {
      district: "วัฒนา",
      subdistricts: ["คลองตันเหนือ", "คลองตัน", "พระโขนงเหนือ"],
    },
    {
      district: "บางคอแหลม",
      subdistricts: ["บางคอแหลม", "วัดพระยาไกร", "บางโคล่"],
    },
    {
      district: "จตุจักร",
      subdistricts: ["จันทรเกษม", "เสนานิคม", "ลาดยาว", "จอมพล", "จตุจักร"],
    },
    {
      district: "ยานนาวา",
      subdistricts: ["ช่องนนทรี", "บางโพงพาง"],
    },
    {
      district: "บางกอกน้อย",
      subdistricts: ["บ้านช่างหล่อ", "บางขุนนนท์", "บางขุนศรี", "อรุณอมรินทร์"],
    },
    {
      district: "ดอนเมือง",
      subdistricts: ["สนามบิน", "สีกัน", "ดอนเมือง"],
    },
    {
      district: "หลักสี่",
      subdistricts: ["ทุ่งสองห้อง", "ตลาดบางเขน"],
    },
    {
      district: "ปากเกร็ด",
      subdistricts: ["บางตลาด", "บ้านใหม่", "คลองพระอุดม", "บางพูด", "บางพูน"],
    },
    {
      district: "คลองเตย",
      subdistricts: ["คลองเตย", "คลองตัน", "พระโขนง"],
    },
    {
      district: "บางนา",
      subdistricts: ["บางนา"],
    },
    {
      district: "สายไหม",
      subdistricts: ["สายไหม", "ออเงิน", "คูคต"],
    },
    {
      district: "สะพานสูง",
      subdistricts: ["สะพานสูง"],
    },
    {
      district: "หนองแขม",
      subdistricts: ["หนองแขม", "หนองค้างพลู"],
    },
    {
      district: "มีนบุรี",
      subdistricts: ["มีนบุรี", "แสนแสบ"],
    },
    {
      district: "ลาดกระบัง",
      subdistricts: [
        "ลาดกระบัง",
        "คลองสองต้นนุ่น",
        "คลองสามประเวศ",
        "ลำปลาทิว",
        "ลำต้อยติ่ง",
      ],
    },
    {
      district: "บางพลัด",
      subdistricts: ["บางพลัด", "บางยี่ขัน", "บางบำหรุ", "บางอ้อ"],
    },
    {
      district: "ทวีวัฒนา",
      subdistricts: ["ทวีวัฒนา", "ศาลาธรรมสพน์"],
    },
    {
      district: "จอมทอง",
      subdistricts: ["จอมทอง", "บางขุนเทียน", "บางค้อ", "บางปะกอก"],
    },
    {
      district: "บางแค",
      subdistricts: ["บางแค", "บางแคเหนือ", "บางไผ่", "หลักสอง"],
    },
    {
      district: "ตลิ่งชัน",
      subdistricts: ["บางเชือกหนัง", "คลองชักพระ", "ตลิ่งชัน", "ฉิมพลี"],
    },
  ];

  const district_chr = [
    {
      district: "เมืองชลบุรี",
      subdistricts: [
        "บางปลาสร้อย",
        "บางทราย",
        "หนองปรือ",
        "บ้านสวน",
        "พลูตาหลวง",
        "เสม็ด",
        "ห้วยกะปิ",
        "บ่อวิน",
        "บึง",
      ],
    },
    {
      district: "บางละมุง",
      subdistricts: ["นาเกลือ", "บางละมุง", "หนองปลาไหล", "โป่ง", "เขาไม้แก้ว"],
    },
    {
      district: "ศรีราชา",
      subdistricts: [
        "ศรีราชา",
        "สุรศักดิ์",
        "ทุ่งสุขลา",
        "บางพระ",
        "บ่อวิน",
        "บึง",
      ],
    },
    {
      district: "พัทยา",
      subdistricts: ["นาเกลือ", "บึงน้ำ", "หนองปรือ", "เมืองพัทยา", "ห้วยใหญ่"],
    },
    {
      district: "สัตหีบ",
      subdistricts: ["สัตหีบ", "บางเสร่", "นาจอมเทียน", "แสมสาร"],
    },
  ];
  const [districtQuery, setDistrictQuery] = useState(""); // สำหรับคำค้นหาเขต
  const [selectedDistrict, setSelectedDistrict] = useState(null); // เขตที่เลือก
  const [subdistrictQuery, setSubdistrictQuery] = useState(""); // สำหรับคำค้นหาแขวง
  const [suggestedDistricts, setSuggestedDistricts] = useState([]); // รายการเขตที่กรองได้
  const [suggestedSubdistricts, setSuggestedSubdistricts] = useState([]); // รายการแขวงที่กรองได้

  // ค้นหาเขต
  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setDistrictQuery(value);
    if (selectedProvince === "Chonburi") {
      if (value) {
        const filteredDistricts = district_chr.filter((district) =>
          district.district.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestedDistricts(filteredDistricts);
      } else {
        setSuggestedDistricts([]);
      }
    } else {
      if (value) {
        const filteredDistricts = districts_bkk.filter((district) =>
          district.district.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestedDistricts(filteredDistricts);
      } else {
        setSuggestedDistricts([]);
      }
      
    }
  };

  // เลือกเขต
  const handleDistrictSelect = (district) => {
    // console.log('district', district);
    onDistrictQueryChange(district.district); 
    setDistrictQuery(district.district);
    setSelectedDistrict(district);
    setSuggestedDistricts([]);
    setSubdistrictQuery(""); // รีเซ็ตคำค้นหาแขวง
    setSuggestedSubdistricts([]); // รีเซ็ตรายการแขวง  
  };

  // ค้นหาแขวง (ขึ้นอยู่กับเขตที่เลือก)
  const handleSubdistrictChange = (e) => {
    const value = e.target.value;
    setSubdistrictQuery(value);

    if (value && selectedDistrict) {
      const filteredSubdistricts = selectedDistrict.subdistricts.filter(
        (subdistrict) => subdistrict.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestedSubdistricts(filteredSubdistricts);
    } else {
      setSuggestedSubdistricts([]);
    }
  };

  // เลือกแขวง
  const handleSubdistrictSelect = (subdistrict) => {
    setSubdistrictQuery(subdistrict);
    setSuggestedSubdistricts([]);
  };

  return (
    <div>
      {/* ช่องค้นหาเขต */}
      <Form.Group>
        <Form.Control
          type="text"
          value={districtQuery}
          onChange={handleDistrictChange}
          placeholder="District..."
        />
        {suggestedDistricts.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              border: "1px solid #ccc",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {suggestedDistricts.map((district, index) => (
              <li
                key={index}
                onClick={() => handleDistrictSelect(district)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                {district.district}
              </li>
            ))}
          </ul>
        )}
      </Form.Group>

      {/* ช่องค้นหาแขวง */}
      <Form.Group style={{ marginTop: "8px" }}>
        <Form.Control
          type="text"
          value={subdistrictQuery}
          onChange={handleSubdistrictChange}
          placeholder="Sub-District..."
          disabled={!selectedDistrict} // ปิดการใช้งานหากยังไม่ได้เลือกเขต
        />
        {suggestedSubdistricts.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              border: "1px solid #ccc",
              maxHeight: "150px",
              overflowY: "auto",
            }}
          >
            {suggestedSubdistricts.map((subdistrict, index) => (
              <li
                key={index}
                onClick={() => handleSubdistrictSelect(subdistrict)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                {subdistrict}
              </li>
            ))}
          </ul>
        )}
      </Form.Group>
    </div>
  );
};

export default AutoSuggest;
