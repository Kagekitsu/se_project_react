import React from "react";
import ClothesSection from "../ClothesSection/ClothesSection";
import avatarImage from "../../images/avatar.svg";
import "./Profile.css";
import SideBar from "../SideBar/SideBar.js";

const Profile = ({ onSelectCard, clothingArr, onCreateModal }) => {
  return (
    <div className="profile">
      <div className="profile__heading">
        <div className="profile__heading_user">
          <img src={avatarImage} alt="logo" className="profile__avatar-image" />
          <div className="profile__profile_name">Braden Jackson</div>
        </div>
        <div className="profile__heading_clothes">
          <div className="profile__title">Your items</div>
          <div className="profile__add_new">
            <button
              type="text"
              className="profile__add-clothes-button"
              onClick={onCreateModal}
            >
              + Add new
            </button>
          </div>
        </div>
      </div>

      <div className="profile__content">
        <SideBar />
        <ClothesSection
          onSelectCard={onSelectCard}
          clothingArr={clothingArr}
          className="clothingsection"
        />
      </div>
    </div>
  );
};

export default Profile;