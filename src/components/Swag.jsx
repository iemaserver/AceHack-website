"use client";
import React, { useState, useRef, useEffect } from "react";
const template = "./images/swag/new_version_frame.png";
// import template from "/assets/images/swag/sample.png";
const defaultAvatar = "/images/swag/NewDefault_gaming.png"; // Path to default avatar image
import FancyButton from "../components/FancyButton";

const Swag = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);
  const defaultAvatarRef = useRef(null); // Reference to the default avatar image

  useEffect(() => {
    drawSwag();
  }, [name, image]); // Update canvas whenever name or image changes

  useEffect(() => {
    // Draw default avatar image on canvas when component mounts
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const defaultAvatarImg = defaultAvatarRef.current;

    defaultAvatarImg.onload = () => {
      ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImage({
          src: reader.result,
          width: img.width, // Get the original width of the image
          height: img.height, // Get the original height of the image
        });
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadSwag = () => {
    // Get the canvas element
    const canvas = canvasRef.current;
    // Create a temporary canvas element with higher resolution
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    const scaleFactor = 2; // Increase the scale factor for higher resolution

    tempCanvas.width = canvas.width * scaleFactor;
    tempCanvas.height = canvas.height * scaleFactor;

    // Draw image on temporary canvas
    tempCtx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    );

    // Convert temporary canvas to data URL with higher quality
    const dataURL = tempCanvas.toDataURL("image/png", 1.0);

    // Create a temporary link element
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "generated_swag.png";
    downloadLink.click();
  };

  // Function to draw swag on canvas
  const drawSwag = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear previous drawings
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load uploaded image or default avatar image if no image is uploaded
    if (image) {
      const uploadedImage = new Image();
      uploadedImage.onload = () => {
        let sx, sy, sWidth, sHeight;
        const aspectRatioCanvas = canvas.width / canvas.height;
        const aspectRatioImage = uploadedImage.width / uploadedImage.height;

        // Determine whether to cover by width or height
        if (aspectRatioImage > aspectRatioCanvas) {
          // Cover by width
          sWidth = uploadedImage.height * aspectRatioCanvas;
          sHeight = uploadedImage.height;
          sx = (uploadedImage.width - sWidth) / 2;
          sy = 0;
        } else {
          // Cover by height
          sWidth = uploadedImage.width;
          sHeight = uploadedImage.width / aspectRatioCanvas;
          sx = 0;
          sy = (uploadedImage.height - sHeight) / 2;
        }

        ctx.drawImage(
          uploadedImage,
          sx,
          sy,
          sWidth,
          sHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };
      uploadedImage.src = image.src;
    } else {
      // Draw default avatar image
      const defaultAvatarImg = defaultAvatarRef.current;
      ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
    }

    // Load template image
    const templateImage = new Image();
    templateImage.onload = () => {
      // Draw the template image on top
      ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

      // Draw the name text
      ctx.font = "bold 50px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        name || "Your Name Here",
        canvas.width / 2,
        canvas.height - 158
      );
    };
    templateImage.src = template;
  };

  return (
    <div
      id="digitalswags"
      className=" min-h-[100vh] flex items-center py-12 relative bg-gradient-to-r from-[#fbff00] to-[#00f0ff] text-black"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-row justify-center mb-6">
          <h1 className="grad-text text-5xl font-bold">
            Get Your Digital Swag
          </h1>
        </div>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row justify-between items-center xl:mx-40">
          <div className="flex w-[60%] md:w-[80%] justify-center mb-5 md:mb-0 -10 ">
            {/* <canvas
              ref={canvasRef}
              width={2000} // Set width of canvas (adjust as needed)
              height={2500} // Set height of canvas (adjust as needed)
              style={{ display: "block", position: "relative" }}
              className="rounded-sm border-4 border-[#05002582] bg-purple-800"
            ></canvas> */}
            <div
              className="md:w-[80%]"
              style={
                {
                  /* Adjust the percentage as needed */
                }
              }
            >
              <canvas
                ref={canvasRef}
                width={900} // Set width of canvas (adjust as needed)
                height={1125} // Set height of canvas (adjust as needed)
                style={{
                  display: "block",
                  position: "relative",
                  width: "100%",
                  backgroundColor:"black",
                }}
                className="rounded-sm border-4 border-[#05002582] bg-"
              ></canvas>
            </div>
            <img
              ref={defaultAvatarRef}
              src={defaultAvatar}
              alt="Default Avatar"
              style={{ display: "none" }} // Hide the default avatar image
            />
          </div>

          <div className="md:w-1/2 w-[90%] lg:w-2/3 flex flex-col justify-between md:ml-10 ">
            <div className="text-md lg:text-xl  text-center md:text-left mb-2 lg:mb-5">
              <div className="heading flex justify-center mb-10">
                <h2 className="lg:text-4xl text-3xl grad-text font-bold -mb-16 md:-mb-8">
                  AceHack 4.0 Digital Badge
                </h2>
              </div>
              <p className="lg:mb-3 mb-1">
                Ready to rock AceHack 4.0? Show the world your excitement with
                our exclusive digital badge!
              </p>
              <p className="lg:mb-3 mb-1">
                Personalize your AceHack 4.0 Badge with your name and photo.
                Download it and spread the word on social media using{" "}
                <a
                  className=" underline hover:text-purple-300"
                  target="_blank"
                  href="https://twitter.com/search?q=%23acehack"
                >
                  #AceHack
                </a>{" "}
                and tagging{" "}
                <a
                  className=" underline hover:text-purple-300"
                  target="_blank"
                  href="https://twitter.com/AceHack_uemj"
                >
                  @AceHack_uemj
                </a>
                .
              </p>
              <p className="text-sm lg:mb-3 mb-1 text-green-1000">
                <i>
                  *Your privacy matters! We never store your images on our
                  servers.
                </i>
              </p>
            </div>
            <div className="flex flex-col  md:justify-between">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="rounded-sm border-none w-full border-white bg-black px-4 py-2 text-white text-lg mb-3 md:mb-0 "
                />
              </div>
              <div className="flex flex-col md:flex-row justify-end my-3 gap-5">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageInputRef}
                  style={{ display: "none" }}
                />
                <button
                  onClick={() => imageInputRef.current.click()}
                  className=""
                >
                  <FancyButton data="Upload your photo" id="upload" />
                </button>

                <button onClick={handleDownloadSwag}>
                  <FancyButton data="Download" id="download" />
                </button>

                <button onClick={handleDownloadSwag}>
                  <a href="https://ctt.ac/cxM88">
                    <FancyButton data="Share" id="share" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swag;
