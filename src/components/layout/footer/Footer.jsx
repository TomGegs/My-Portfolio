/* eslint-disable jsx-a11y/click-events-have-key-events */
function Footer() {
    return (
        <footer>
            <hr className="mx-auto  h-[1px] w-[90%] animate-gradient border-0 bg-gradient-to-r from-primary via-secondary to-[#cbb7f7]" />
            <div className="grid h-full w-full grid-cols-3 grid-rows-2 justify-between gap-x-4 px-10 text-[#FFFDFA] lg:my-4 lg:flex lg:flex-row lg:px-24">
                {/* Copyright footer */}
                <p className="col-span-2 pt-4 text-center text-xs text-gray-600">
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
                    className="cursor-pointer pt-4 text-center text-xs text-gray-600 transition-all ease-in-out hover:text-altSecond"
                >
                    Email
                </div>
                <a
                    href="https://github.com/TomGegs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 text-center text-xs text-gray-600 transition-all ease-in-out hover:text-altSecond"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/thomas-geoghegan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 text-center text-xs text-gray-600 transition-all ease-in-out hover:text-altSecond"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;
