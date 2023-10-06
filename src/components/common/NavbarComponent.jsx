import React, { Fragment } from "react";
import { MAIN_NAV } from "../../utils/Data";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { HamburgerIcon } from "../../../public/icons/SvgIcons";

const NavbarComponent = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {MAIN_NAV.map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-3 font-body font-normal text-white hover:font-bold"
        >
          <a href="#" className="flex items-center text-body1">
            {item.title}
          </a>
        </Typography>
      ))}
    </ul>
  );
  return (
    <Fragment>
      <Navbar className="sticky top-0 z-10 mx-auto max-w-full rounded-none shadow-none bg-primary border-none backdrop-blur-none backdrop-saturate-200 bg-opacity-1 py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src="/logo/Navbar/HYPEBURGER.png" alt="" />
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton variant="text" className="hidden lg:inline-block">
            <HamburgerIcon />
          </IconButton>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <HamburgerIcon />
            ) : (
              <HamburgerIcon />
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
          </div>
        </MobileNav>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
