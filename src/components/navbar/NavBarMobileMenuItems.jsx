const NavBarMobileMenuItems = ({ menuItem }) => {
    return (
        <ul>
            <li className="cursor-pointer rounded-xl border border-bgPrimary  from-altSecond to-primary p-4 hover:border-primary hover:text-primary active:border-bgPrimary active:bg-gradient-to-r active:text-[#FFFDFA]">
                {menuItem}
            </li>
        </ul>
    );
};

export default NavBarMobileMenuItems;
