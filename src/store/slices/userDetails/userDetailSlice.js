import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    profile_details: null,
    education_details: [],
    work_experience: [],
    skills: [],
    projects: [],
    achievement: [],
    about_you: "",
  },
};

export const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addProfileDetails: (state, action) => {
      state.details.profile_details = { ...action.payload };
    },
    addEducationDetails: (state, action) => {
      state.details.education_details = [...action.payload];
    },
    addWorkDetails: (state, action) => {
      state.details.work_experience = [...action.payload];
    },
    addSkillsDetails: (state, action) => {
      state.details.skills = [...action.payload];
    },
    addProjectsDetails: (state, action) => {
      state.details.projects = [...action.payload];
    },
    addAchievementDetails: (state, action) => {
      state.details.achievement = [...action.payload];
    },
    addAboutYou: (state, action) => {
      state.details.about_you = action.payload;
    },
  },
});

export const {
  addProfileDetails,
  addEducationDetails,
  addWorkDetails,
  addProjectsDetails,
  addSkillsDetails,
  addAchievementDetails,
  addAboutYou,
} = userDetailSlice.actions;

export default userDetailSlice.reducer;
