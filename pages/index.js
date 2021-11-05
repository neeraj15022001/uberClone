import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
export default function Home() {
  return (
    <Wrapper>
      <Map></Map>
      <ActionItems>
        <Header>
          <UberLogo
            src={"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"}
          />
          <Profile>
            <Name>Neeraj Gupta</Name>
            <UserImage
              src={"https://avatars.githubusercontent.com/u/55191873?v=4"}
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
flex flex-col bg-white h-screen
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
h-16 rounded-full border border-gray-200 p-2
`;

const ActionButtons = tw.div`
flex justify-between items-center
    `;
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
    `;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 rounded-lg mt-8 flex items-center
    `;
