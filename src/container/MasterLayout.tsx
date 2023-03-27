import Header from "#/components/layout/header";
import Head from "#container/AppHead";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const MasterLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
    </>
  );
};

export default MasterLayout;
