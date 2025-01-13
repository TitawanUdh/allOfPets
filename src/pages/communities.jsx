import React, { useState } from "react";
import { Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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
} from "../router/routes";

function CommunitiesPage({ sectionRef }) {
  const dataCom = [
    {
      num: 1,
      title: "Park",
      title_th: "สวนสาธารณะ",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_PARK}`,
      img: "https://i.pinimg.com/736x/98/9b/8c/989b8c297981c0b0b355a56b8d132cee.jpg",
    },
    {
      num: 2,
      title: "Cafe",
      title_th: "คาเฟ่",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_CAFE}`,
      img: "https://i.pinimg.com/736x/61/fd/9d/61fd9dba3bf8308a87ee0d511f833c0b.jpg",
    },
    {
      num: 3,
      title: "Restaurant",
      title_th: "ร้านอาหาร",

      SubTitle: "",
      link: `${MENU_COMMUNITIES_RES}`,
      img: "https://i.pinimg.com/736x/2e/56/df/2e56df3ec36844cb8f2c585261a53f64.jpg",
    },
    {
      num: 4,
      title: "Department",
      title_th: "ห้างสรรพสินค้า",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_DEP}`,
      img: "https://i.pinimg.com/736x/a9/63/f9/a963f940acb621abd43fa0caf7f661a8.jpg",
    },
    {
      num: 5,
      title: "Hotel",
      title_th: "โรงแรม",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_HOTEL}`,
      img: "https://i.pinimg.com/736x/1c/77/35/1c773591efeae056c8a7ce7b0a3db025.jpg",
    },
    {
      num: 6,
      title: "Grooming",
      title_th: "ร้านอาบน้ำ",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_GROOMING}`,
      img: "https://i.pinimg.com/736x/11/a6/23/11a6234e229fb170066451428e2ec492.jpg",
    },
    {
      num: 7,
      title: "Hospital",
      title_th: "โรงพยาบาล",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_HOSPITAL}`,
      img: "https://i.pinimg.com/736x/7e/1d/d4/7e1dd41867547d82c053bff9396ea96b.jpg",
    },
    {
      num: 8,
      title: "Pet Shop",
      title_th: "ร้านขายของ",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_PETSHOP}`,
      img: "https://i.pinimg.com/736x/95/84/98/95849887f4bf9e40eb78857f9a740130.jpg",
    },
    {
      num: 8,
      title: "Other",
      title_th: "อื่น ๆ",
      SubTitle: "",
      link: `${MENU_COMMUNITIES_OTHER}`,
      img: "https://i.pinimg.com/736x/02/4a/3f/024a3f7e93877311b0d8dc45fd4c2c77.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(dataCom);

  const onSearch = (input) => {
    setSearchTerm(input);
    const filtered = dataCom.filter(
      (item) =>
        item.title.toLowerCase() &&
        item.title_th.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const navigate = useNavigate();
  const goTo = (d) => {
    navigate(d.link);
  };
  return (
    <div
      ref={sectionRef}
      className="p-4 pt-5 mt-2 d-flex justify-content-center "
    >
      <div className="bg-home-com p-4">
        <Form.Control
          className="w-100"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        <div className="d-flex flex-wrap justify-content-center pt-4 col-12 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((d, i) => (
              <span
                key={i}
                className="box-item pointer-events col-2"
                onClick={() => goTo(d)}
              >
                <Image src={d.img} className="box-img" />
                <p className="box-text mt-2">{d.title}</p>
              </span>
            ))
          ) : (
            <>
              {dataCom.map((d, i) => (
                <>
                  <span
                    key={i}
                    className="box-item pointer-events col-2"
                    onClick={() => goTo(d)}
                  >
                    <Image src={d.img} className="box-img" />{" "}
                    <p className="box-text mt-2"> {d.title}</p>
                  </span>{" "}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommunitiesPage;
