import { ThreeDots } from "react-loader-spinner";

export default function Loader({ loader }) {
  return (
    <ThreeDots
      visible={loader}
      height="80"
      width="80"
      color="#1d1dba"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
