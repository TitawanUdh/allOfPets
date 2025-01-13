import { AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, Image } from "react-bootstrap";
import {
  MENU_COMMUNITIES_CAFE,
  MENU_COMMUNITIES_DEP,
  MENU_COMMUNITIES_GROOMING,
  MENU_COMMUNITIES_HOSPITAL,
  MENU_COMMUNITIES_HOTEL,
  MENU_COMMUNITIES_OTHER,
  MENU_COMMUNITIES_PARK,
  MENU_COMMUNITIES_PETSHOP,
  MENU_COMMUNITIES_RES,
} from "../../router/routes";
import { useNavigate } from "react-router-dom";
import AutoSuggest from "../../hook/provice";
import { IoMdRefresh } from "react-icons/io";

function Cafe() {
  const dataCom = [
    {
      num: 1,
      title: "Pa Plean Cafe",
      title_th: "พาเพลิน คาเฟ่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_PARK}`,
      img: "https://img.wongnai.com/p/1920x0/2022/04/05/6e2b92caa88844edbb1e8801cf1795c2.jpg",
    },
    {
      num: 2,
      title: "Little Dog Club",
      title_th: "ลิเติลด๊อก คาเฟ่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_CAFE}`,
      img: "https://i.pinimg.com/736x/61/fd/9d/61fd9dba3bf8308a87ee0d511f833c0b.jpg",
    },
    {
      num: 3,
      title: "Jack Coffee",
      title_th: "แจ็ค คอฟฟี่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_RES}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipMhJFaDxU2aHI3OZaM5RyDbwHrtxM1iUcfvUaHQ=s1360-w1360-h1020",
    },
    {
      num: 4,
      title: "DUEMDUM COFFEE",
      title_th: "ดื่มดึ่ม คอฟฟี่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_DEP}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipPad7-j9fzWGnEqAGuOQ2OmUIqyCKcNCKrkLX8c=s1360-w1360-h1020",
    },
    {
      num: 5,
      title: "Baan Ton Mai Si Khaw Cafe",
      title_th: "บ้านต้นไม้สีขาวคาเฟ่",

      SubTitle: "",
      link: `${MENU_COMMUNITIES_HOTEL}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipNCV--rxjVG1vHg4gklxdq8Dp8u7seZDFWsuCcO=s1360-w1360-h1020",
    },
    {
      num: 6,
      title: "Black Drop specialty coffee & bakery",
      title_th: "แบล็คดรอป คอฟฟี่",

      SubTitle: "",
      link: `${MENU_COMMUNITIES_GROOMING}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipNf2TOtX5_sb0Bv0m9HYYpxvCWZpSm7v00I3iJZ=s1360-w1360-h1020",
    },
    {
      num: 7,
      title: "Big Dog Café",
      title_th: "บิ๊กด๊อก คาเฟ่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_HOSPITAL}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipM6ERGTHoko_VmDtOTRjrhtoKzfn08gZyZ0PRnI=s1360-w1360-h1020",
    },
    {
      num: 8,
      title: "CafeSlash ",
      title_th: "คาเฟ่สแลช",

      SubTitle: "",
      link: `${MENU_COMMUNITIES_PETSHOP}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipOiKy7MD78GK4kyJXgCmF-sfPzGVR2EVYFpVhsg=s1360-w1360-h1020",
    },
    {
      num: 8,
      title: "Homy in the backyard",
      title_th: "โฮมี่อินดิแบล็คยาด",

      SubTitle: "",
      link: `${MENU_COMMUNITIES_OTHER}`,
      img: "https://lh3.googleusercontent.com/p/AF1QipORqoO819QbC-1slUrAuWLpX7G_ktpawzn9HQxV=s1360-w1360-h1020",
    },
  ];
  const [isClear, setIsClear] = useState(false);
  const [filteredData, setFilteredData] = useState(dataCom);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSelectedButton('Bangkok');
    setSearchTerm('')
    setFilteredData(dataCom)
  }, [isClear]);

  const onSearch = (input) => {
    setSearchTerm(input);
    const filtered = dataCom.filter(
      (item) => 
        (item.title && item.title.toLowerCase().includes(input.toLowerCase())) ||
        (item.title_th && item.title_th.toLowerCase().includes(input.toLowerCase()))
    );
    setFilteredData(filtered);
};

  const navigate = useNavigate();

  const goTo = (d) => {
    navigate(d.link);
  };

  const onRefresh = () => {
    setIsClear(!isClear);
  };

  const province = [
    {
      value: "Bangkok",
      label: "กรุงเทพมหานคร",
    },
    {
      value: "Chonburi",
      label: "ชลบุรี",
    },
  ];

  const [selectedProvince, setSelectedProvince] = useState(null); // กำหนดค่าเริ่มต้นให้เป็นกรุงเทพมหานคร

  const [selectedButton, setSelectedButton] = useState("");
  const handleChange = (selectedOption) => {
    setSelectedProvince(selectedOption); // เก็บค่าเมื่อมีการเลือกจังหวัด
  };

  const onBtnGroup = (d) => {
    setSelectedButton(d.value);
    handleChange(d.value);
  };
  return (
    <div className="p-5 ">
      {" "}
      <div className="d-flex justify-content-end gap-2 mb-2">
        <ButtonGroup>
          {province.map((d, i) => (
            <Button
              key={i}
              variant={`${selectedButton === d.value ? "warning" : "light"}`}
              onClick={() => onBtnGroup(d)}
            >
              {d.value}
            </Button>
          ))}
        </ButtonGroup>
        <Button className="border-0 p-2 bg-warning" onClick={onRefresh}>
          <IoMdRefresh />
        </Button>
      </div>
      <AutoSuggest isClear={isClear} selectedProvince={selectedProvince} />
      <div className="pb-1 pt-5">
        <Form.Control
          className="w-100"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />{" "}
      </div>
      <div className="d-flex flex-wrap justify-content-center pt-4 col-12 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((d, i) => (
            <span
              key={i}
              className="box-item pointer-events col-2 p-2"
              onClick={() => goTo(d)}
            >
              <Image src={d.img} className="box-img" />
              <p className="box-text mt-2 text-center">{d.title}</p>
            </span>
          ))
        ) : (
          <>
            {dataCom.map((d, i) => (
              <>
                <span
                  key={i}
                  className="box-item pointer-events col-2 p-2"
                  onClick={() => goTo(d)}
                >
                  <Image src={d.img} className="box-img " />{" "}
                  <p className="box-text mt-2 text-center"> {d.title}</p>
                </span>{" "}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Cafe;
