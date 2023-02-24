import { Chat } from "@pushprotocol/uiweb";

const PushChat = () => {
  return (
    <Chat
      account="0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31" //user address
      supportAddress="0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31" //support address
      apiKey="ZP1z3f2KJY.qZiC9DEfm4PxxwUZ0UnYS6jUb9YEPG3ITk2Tpfev6Qtbo3lClp8DVSIWlHPI92dq"
      env="staging"
    />
  );
};

export default { PushChat };