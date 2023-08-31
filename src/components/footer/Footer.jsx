import ContactIcons from "./ContactIcons";

const Footer = () => {
    return (
        <footer className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-2 pt-4 text-[#FFFDFA] lg:px-24 lg:py-2">
            <ContactIcons />
            {/* Copyright footer */}
            <p className="pt-4 text-center text-xs text-gray-600">
                &copy; {new Date().getFullYear()} | Designed and coded by Tom
                Geoghegan
            </p>
        </footer>
    );
};

export default Footer;
