import styled from "styled-components";

const Profile = ({ profile }) => {
  return (
    <ImgBox>
      <img src={profile.avatar_url} alt="프로필 사진" />
    </ImgBox>
  );
};

export default Profile;

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;
