/* eslint-disable jsx-a11y/click-events-have-key-events */
function Footer() {
    return (
        <footer>
            <hr className="animate-gradient  border-0 bg-gradient-to-r from-primary via-secondary h-[1px] to-[#cbb7f7] w-[90%] mx-auto" />
            <div className="h-full w-full grid grid-cols-3 gap-x-4 grid-rows-2 lg:flex lg:flex-row justify-between px-10 lg:my-4 text-[#FFFDFA] lg:px-24">
                {/* Copyright footer */}
                <p className="pt-4 text-center text-xs col-span-2 text-gray-600">
                    &copy; {new Date().getFullYear()} | Designed and coded by
                    Tom Geoghegan
                </p>
                {/* Contact details */}
                <p className="pt-4 text-center text-xs text-gray-600">
                    🌎Brisbane, Australia
                </p>
                <div
                    onClick={() => {
                        const emailSubject =
                            'Meeting with Tom Geoghegan - React Developer';
                        const emailBody = "Hi Tom, Let's grab a coffee!";
                        const mailToLink = `mailto:tomgegs@outlook.com?subject=${encodeURIComponent(
                            emailSubject
                        )}&body=${encodeURIComponent(emailBody)}`;
                        window.location.href = mailToLink;
                    }}
                    role="button"
                    target="_blank"
                    tabIndex={0}
                    className="pt-4 text-center cursor-pointer text-xs text-gray-600 hover:text-altSecond transition-all ease-in-out"
                >
                    Email
                </div>
                <a
                    href="https://github.com/TomGegs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 text-center text-xs text-gray-600 hover:text-altSecond transition-all ease-in-out"
                >
                    Github
                </a>
                <a
                    href="https://www.linkedin.com/in/thomas-geoghegan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 text-center text-xs text-gray-600 hover:text-altSecond transition-all ease-in-out"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
