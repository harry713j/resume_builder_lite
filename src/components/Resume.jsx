import React from "react";
import {
  Page,
  View,
  Document,
  Text,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import robotoBold from "../fonts/Roboto-Bold.ttf";
import robotoReg from "../fonts/Roboto-Regular.ttf";
import robotoBlack from "../fonts/Roboto-Black.ttf";
import robotoMedium from "../fonts/Roboto-Medium.ttf";
import emailIcon from "../assets/mail (1).png";
import phoneIcon from "../assets/telephone-handle-silhouette.png";
import linkedInIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import globeIcon from "../assets/globe.png";
import { transformDate, capitalizedString } from "../utility/utility";

Font.register({
  family: "Roboto",
  fonts: [
    { src: robotoReg, fontWeight: 400 },
    { src: robotoMedium, fontWeight: 500 },
    { src: robotoBold, fontWeight: 700 },
    { src: robotoBlack, fontWeight: 900 },
  ],
});

const style = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  block: {
    margin: "0 10",
    padding: "0 10",
  },
  box: {
    margin: 10,
    padding: 10,
  },

  name: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "36px",
    color: "#F9CB81",
  },
  designation: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "18px",
    color: "#6A6B6D",
    opacity: "0.7",
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "18px",
    color: "#141C47",
    opacity: "0.7",
    marginBottom: "5px",
    marginTop: "5px",
  },
  sub_heading: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "16px",
    color: "#141C47",
    opacity: "0.6",
  },
  mini_heading: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "14px",
    color: "#141C47",
    opacity: "0.6",
    marginBottom: "5px",
  },
  thumbnail: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "10px",
    color: "#141C47",
    opacity: "0.5",
    marginBottom: "5px",
  },
  position_details: {
    display: "flex",
    flexDirection: "row",
    fontSize: "10px",
    fontFamily: "Roboto",
    fontWeight: 400,
    color: "#141C47",
    opacity: "0.5",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "7px",
  },
  work_details: {
    fontFamily: "Roboto",
    fontWeight: 400,
    color: "#141C47",
    fontSize: "12px",
    opacity: "0.9",
  },
  listItem: {
    marginBottom: "3px",
    display: "flex",
    flexDirection: "row",
  },
  listItem_skill: {
    marginBottom: "3px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bullet: {
    width: "15px",
    marginRight: "5px",
  },
  section1: {
    width: "66.667%",
    margin: 10,
    padding: 10,
  },
  section2: {
    width: "33.333%",
    margin: 10,
    padding: 10,
  },
  paragraph_style: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "12px",
    color: "#141C47",
    opacity: "0.9",
  },
  education_data: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    display: "inline-block",
    width: 15,
    height: 15,
  },
  contact_text: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    color: "#141C47",
    opacity: "0.8",
  },
  contact_block: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "2px 0",
    gap: "4px",
  },
  contact_section: {
    marginTop: "-40px",
    marginBottom: "20px",
  },
  skill_text: {
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "12px",
    color: "#141C47",
  },
  achievement_text: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "12px",
    color: "#141C47",
  },
  achievement_thumbnail: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "10px",
    color: "#141C47",
    opacity: "0.6",
  },
});

const Resume = ({
  profile_details,
  education_details,
  work_experience,
  skills,
  projects,
  achievement,
  about_you,
}) => {
  return (
    <Document>
      <Page size="A4" style={style.page}>
        <View style={style.box}>
          <View style={style.block}>
            <Text style={style.name}>
              {profile_details?.firstName} {profile_details?.lastName}
            </Text>
            <Text style={style.designation}>{profile_details?.jobTitle}</Text>
          </View>
          <View style={style.container}>
            <View style={style.section1}>
              <View style={{ marginBottom: "10px" }}>
                <Text style={style.heading}>Myself</Text>
                <Text style={style.paragraph_style}>{about_you}</Text>
              </View>
              <View style={{ marginBottom: "10px" }}>
                {work_experience?.length ? (
                  <View>
                    <Text style={style.heading}>Experience</Text>
                    {work_experience?.map((work) => (
                      <View key={work?.jobTitle}>
                        <Text style={style.sub_heading}>
                          {`${work?.companyName} - ${work?.jobLocation}`}
                        </Text>
                        <View style={style.position_details}>
                          <Text>{work?.jobTitle}</Text>
                          <Text>{`${transformDate(work.startDate)} - ${
                            work.endDate
                              ? transformDate(work.endDate)
                              : "present"
                          }`}</Text>
                        </View>
                        <View style={style.work_details}>
                          <View style={style.listItem}>
                            <Text>{work?.jobResponsibility}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <View>
                    <Text style={style.heading}>Projects</Text>
                    {projects?.map((project) => (
                      <View key={project?.projectName}>
                        <Text style={style.sub_heading}>
                          {project?.projectName}
                        </Text>
                        <View style={style.position_details}>
                          <Text>
                            {project?.projectLink && project?.projectLink}
                          </Text>
                        </View>
                        <View style={style.work_details}>
                          <View style={style.listItem}>
                            <Text style={{ fontWeight: 500 }}>
                              Technologies used:
                            </Text>
                            <Text>{` ${project?.techUsed}`}</Text>
                            <Text style={{ fontWeight: 500 }}>Summary:</Text>
                            <Text>{` ${project?.projectSummary}`}</Text>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </View>
              <View>
                <Text style={style.heading}>Education</Text>
                <View style={style.education_data}>
                  {education_details?.map((details) => (
                    <View key={details?.degreeName}>
                      <Text style={style.mini_heading}>
                        {details?.degreeName} {details?.major}
                      </Text>
                      <View style={style.thumbnail}>
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text>{`${details?.instituteName},`}</Text>
                          <Text>
                            {`${transformDate(
                              details?.startDate
                            )} - ${transformDate(details?.endDate)}`}
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={style.thumbnail}
                      >{`CGPA: ${details?.cgpa}`}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={style.section2}>
              <View style={style.contact_section}>
                <Text style={style.heading}>Contact</Text>
                <View style={style.contact_block}>
                  <Image style={style.icon} source={emailIcon} />
                  <Text style={style.contact_text}>
                    {profile_details?.email}
                  </Text>
                </View>
                {profile_details?.phoneNumber && (
                  <View style={style.contact_block}>
                    <Image style={style.icon} source={phoneIcon} />
                    <Text style={style.contact_text}>
                      {profile_details?.phoneNumber}
                    </Text>
                  </View>
                )}
                {profile_details?.linkedInProfile && (
                  <View style={style.contact_block}>
                    <Image style={style.icon} source={linkedInIcon} />
                    <Text style={style.contact_text}>
                      {profile_details?.linkedInProfile}
                    </Text>
                  </View>
                )}
                {profile_details?.githubProfile && (
                  <View style={style.contact_block}>
                    <Image style={style.icon} source={githubIcon} />
                    <Text style={style.contact_text}>
                      {profile_details?.githubProfile}
                    </Text>
                  </View>
                )}
                {profile_details?.website && (
                  <View style={style.contact_block}>
                    <Image style={style.icon} source={globeIcon} />
                    <Text style={style.contact_text}>
                      {profile_details?.website}
                    </Text>
                  </View>
                )}
              </View>
              <View style={{ marginBottom: "20px" }}>
                <Text style={style.heading}>Skills</Text>
                <View>
                  {skills?.map((skill) => (
                    <View key={`${skill}`} style={style.listItem_skill}>
                      <Text style={style.bullet}>&bull;</Text>
                      <Text style={style.skill_text}>
                        {capitalizedString(skill?.toString())}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
              <View style={{ marginBottom: "20px" }}>
                <Text style={style.heading}>Honors and Achievements</Text>
                <View>
                  {achievement?.map((achieve) => (
                    <View key={achieve?.awardName} style={{ margin: "5px 0" }}>
                      <Text style={style.achievement_text}>
                        {achieve?.awardName}
                      </Text>
                      <Text style={style.achievement_thumbnail}>
                        {`${transformDate(achieve?.awardDate)}, ${
                          achieve?.awarder
                        }`}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Resume;
