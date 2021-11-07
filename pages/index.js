import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  });
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo
            src={"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}
          />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoURL}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href={"/search"} passHref={true}>
            <ActionButton>
              <ActionButtonImage src={"https://i.ibb.co/cyvcpfF/uberx.png"} />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src={"https://i.ibb.co/n776JLm/bike.png"} />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src={"https://i.ibb.co/5RjchBg/uberschedule.png"}
            />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-white h-screen dark:bg-gray-900
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center justify-end
`;

const Name = tw.div`
mr-4 text-sm
`;

const UserImage = tw.img`
h-16 rounded-full border border-gray-200 p-2 cursor-pointer
`;

const ActionButtons = tw.div`
flex justify-between items-center
    `;
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl dark:bg-gray-600
    `;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 rounded-lg mt-8 flex items-center dark:bg-gray-600
    `;
