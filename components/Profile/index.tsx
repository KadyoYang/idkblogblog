import styled from "@emotion/styled";
import Image from "next/image";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  padding: 3px;

  position: relative;

  .image {
    position: relative;
    height: 100px;
    width: 100%;
  }
`;

const Profile: React.FC<{
  name: string;
  description: string;
  imagePath?: string;
}> = ({ name, description, imagePath }) => {
  return (
    <ProfileStyle>
      <div className="image">
        <Image
          src={imagePath ?? "/stonks.jpg"}
          alt="empty"
          // layout="fill"
          objectFit={"contain"}
          // width={100}
          // height={100}
          fill={true}
        />
      </div>

      <p>{name}</p>
      <hr />
      <p>{description}</p>
    </ProfileStyle>
  );
};

export default Profile;
