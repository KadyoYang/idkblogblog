import styled from "@emotion/styled";
import Image from "next/image";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;

  border-width: 2px;
  border-radius: 8px;
  border-style: solid;
  padding: 5px;

  height: 200px;
`;

const Profile: React.FC<{
  name: string;
  description: string;
  imagePath?: string;
}> = ({ name, description, imagePath }) => {
  return (
    <ProfileStyle>
      <Image
        src={imagePath ?? "/next.svg"}
        alt="empty"
        width={30}
        height={30}
      />
      <p>{name}</p>
      <p>{description}</p>
    </ProfileStyle>
  );
};

export default Profile;
