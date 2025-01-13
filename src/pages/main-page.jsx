import React, { useRef } from "react";
import { Button, Image } from "react-bootstrap";
import imgDog from "../Images/dog.png";
import AboutPage from "./about";
import ScrollButton from "../hook/scrollButton";

function MainPage() {
  const sectionRef = useRef(null);
  const ScrollFn = ScrollButton(sectionRef);
  return (
    <div
      className="h-full"
      style={{
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex align-items-center col-12 p-5 mt-5">
        <div className="col-xl-6 ">
          <div className="bg-home-1">
            {" "}
            <div className="set-frame-data">
              <h1 className="d-flex justify-content-start m-4 mb-0 mt-0 set-data box-text">
                All of Pet
              </h1>
              <h3 className=" d-flex justify-content-start text-warning m-4 mb-0 mt-0 set-data box-text">
                Our Communities
              </h3>
              <span className="d-flex justify-content-start text-secondary m-4 mb-0 mt-3 box-text">
                "Be a part of our All of Pet family, come join us!"
              </span>
              <div className="mt-5 d-flex justify-content-end align-items-end">
                <Button
                  onClick={ScrollFn}
                  className="btn-warning border-0 me-2"
                >
                  Let's go
                </Button>
                <Button variant="outline-warning" className="border-0">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 d-flex justify-content-center">
          <Image src={imgDog} className="home-page"></Image>
        </div>
      </div>{" "}
      <AboutPage sectionRef={sectionRef} />
      
    </div>
  );
}

export default MainPage;
