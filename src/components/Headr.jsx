import logo from "../assets/images/chef-claude-icon.png";

const Headr = () => {
  return (
    <header className="flex items-center justify-center gap-4 py-2 shadow-md bg-white">
      <img src={logo} alt="chef claude logo" className="size-16" />
      <h1 className="text-2xl font-semibold">Chef Claude</h1>
    </header>
  );
};

export default Headr;
