import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


const NAV_MENU = ["Home", "About Us", "Contact Us"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography as="a" href="#" variant="small" className="font-medium">
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      color="transparent"
      className="absolute z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography variant="h6">Material Design</Typography>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <NavItem>Home</NavItem>
          <NavItem>About Us</NavItem>
          <NavItem>Contact Us</NavItem>
        </ul>
        <div className="hidden items-center lg:flex">
          <Button variant="text" color="white">
            Log in
          </Button>
          <Button color="white">contact</Button>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text" color="gray">
              Log in
            </Button>
            <Button color="gray">contact</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}


export default Navbar;
