import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  const generateNewRoom = (e) => {
    e.preventDefault();
    const newRoomId = uuid();
    setRoomId(newRoomId);
    toast.success("Room ID Generated");
  };
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Missing Required Fields");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
    toast.success("Joined Room Successfully")
  };

    // when enter then also join
    const handleInputEnter = (e) => {
      if (e.code === "Enter") {
        joinRoom();
      }
    };
  return (
    <>
      <div className="home-page">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="home-container text-center p-4 shadow-sm ">
            {/* Logo Image */}
            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />

            {/* Welcome Heading */}
            <h3 className="mt-3">Good to Have You Here</h3>

            {/* Input fields */}
            <div className="mt-3">
              <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="form-control mb-3"
                placeholder="Enter the Room ID"
                onKeyUp={handleInputEnter}

              />
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="email"
                className="form-control mb-3"
                placeholder="Enter your Username"
                onKeyUp={handleInputEnter}

              />
            </div>

            {/* Button */}
            <button
              type="button"
              className="btn btn-secondary btn-block jrBtn px-4"
              onClick={joinRoom}
            >
              Join Room
            </button>

            {/* Paragraph */}
            <p className="mt-4 text-muted">
              Don't have a room ID?{" "}
              <span onClick={generateNewRoom} className="newRoom">
                New Room
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
