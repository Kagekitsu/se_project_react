import React from "react";
import { useState, useContext, useEffect } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggleswitch">
      <input
        type="checkbox"
        className="toggleswitch__checkbox"
        onChange={handleToggleSwitchChange}
      ></input>
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggleswitch__slider toggleswitch__slider-F"
            : "toggleswitch__slider toggleswitch__slider-C"
        }
      ></span>
      <p
        className={`toggleswitch__temp-F ${
          currentTemperatureUnit === "F" && "toggleswitch__active"
        }`}
      >
        F
      </p>
      <p
        className={`toggleswitch__temp-C ${
          currentTemperatureUnit === "C" && "toggleswitch__active"
        }`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;