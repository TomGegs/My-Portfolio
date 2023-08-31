import images from "../../data/images";

const EmailIconButton = ({ pulse }) => {
    return (
        <button
            className="max-h-[40px] justify-self-end flex relative"
            onClick={() => {
                const emailSubject =
                    "Meeting with Tom Geoghegan - React Developer";
                const emailBody = "Hi Tom, Let's grab a coffee!";
                const mailToLink = `mailto:tomgegs@outlook.com?subject=${encodeURIComponent(
                    emailSubject
                )}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = mailToLink;
            }}>
            <images.emailIcon className="duration-150 text-[30px] lg:text-[40px] ease-in-out hover:cursor-pointer hover:text-altSecond" />
            {/* email ping animation */}
            <span className={`${pulse} relative h-4 w-4 -top-1 right-2 `}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-primary"></span>
            </span>
        </button>
    );
};

export default EmailIconButton;
