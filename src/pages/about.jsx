import React, { useRef, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { FaAnglesDown } from "react-icons/fa6";
import CommunitiesPage from "./communities";
import ScrollButton from "../hook/scrollButton";
import Swal from "sweetalert2";

function AboutPage({ sectionRef }) {
  const subDataWelcome = [
    {
      num: 1,
      sub_data:
        "เรารวบรวม Facilities ให้คุณ และเพื่อนซี้ตัวเล็ก สามารถสร้างบรรยากาศ และสัมผัสกับประสบการณ์ใหม่ เปิดกว้างองค์ความรู้เกี่ยวกับสัตว์เลี้ยงของคุณไว้ในที่นี้ เรารวบรวม Facilities ให้คุณ และเพื่อนซี้ตัวเล็ก สามารถสร้างบรรยากาศ และสัมผัสกับประสบการณ์ใหม่ เปิดกว้างองค์ความรู้เกี่ยวกับสัตว์เลี้ยงของคุณไว้ในที่นี้ เรารวบรวม Facilities ให้คุณ และเพื่อนซี้ตัวเล็ก สามารถสร้างบรรยากาศ และสัมผัสกับประสบการณ์ใหม่ เปิดกว้างองค์ความรู้เกี่ยวกับสัตว์เลี้ยงของคุณไว้ในที่นี้",
    },
  ];
  const sectionRefCom = useRef(null);
  const ScrollFn = ScrollButton(sectionRefCom);
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(true);

  const onSubmit = (dataEmail) => {
    setEmailCheck(false);
    setEmail(dataEmail);
    if (email) {
      setEmailCheck(true);
      Swal.fire({
        title: "Your Email!",
        text: `Do you confirm your "${dataEmail}"`,
        icon: "question",
        confirmButtonText: "Confirm",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          onSave(dataEmail); // Call onSave only if confirmed
          
        }
      });
    }
  };

  const onSave = (dataEmail) => {
    Swal.fire({
      title: "Your Email Confirmed!",
      icon: "success",
    });
  };
  const onEmail = (value) => {
    setEmailCheck(true)
    setEmail(value);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center p-4 mt-5 w-100 "
        ref={sectionRef}
      >
        <div
          className="col-12 p-4 bg-home m-3 mt-0 d-flex"
         
        >
          <div className="col-xl-3">
            <Image
              style={{
                width: "300px",
                borderRadius: "20px",
              }}
              src="https://i.pinimg.com/736x/6e/4b/4b/6e4b4b3fc62499ec89bcdf7efb5a4f98.jpg"
            />
          </div>
          <div className="text-center p-3 col-xl-9" >
            <h2>Welcome to</h2>
            <h1 className="set-data mb-4">"All of Pet"</h1>
            {subDataWelcome.map((sd, i) => (
              <div className="data-th m-0 p-0" key={i}>
                {sd.sub_data}
              </div>
            ))}
            <p className="data-th mt-5 ">สนใจรับข้อมูลข่าวสาร</p>
            <div className="d-flex justify-content-center gap-2 mb-0 pb-0">
              <Form.Control
                placeholder="Fill your Email"
                className={`w-50 ${!emailCheck ? "border-danger" : ""}`}
                onChange={(e) => onEmail(e.target.value)}
              />{" "}
              <Button
                className="border-0"
                variant="btn btn-warning"
                onClick={() => onSubmit(email)}
              >
                Submit
              </Button>
            </div>{" "}
           
              {!emailCheck && (
                <p className="text-danger">Please, Input your email address</p>
              )}{" "}
            
            <div className="text-end ">
              <span className="bg-icon pointer-events" onClick={ScrollFn}>
                <FaAnglesDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <CommunitiesPage sectionRef={sectionRefCom} />
    </>
  );
}

export default AboutPage;
