import images from '../../data/images';

function EmailIconButton({ pulse }) {
    return (
        <button
            type="button"
            className="relative flex max-h-[40px] justify-self-end"
            onClick={() => {
                const emailSubject =
                    'Meeting with Tom Geoghegan - Front-end Developer';
                const emailBody = "Hi Tom, Let's grab a coffee!";
                const mailToLink = `mailto:tomgegs@outlook.com?subject=${encodeURIComponent(
                    emailSubject
                )}&body=${encodeURIComponent(emailBody)}`;
                window.location.href = mailToLink;
            }}
        >
            <images.emailIcon className="text-[30px] duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond lg:text-[40px]" />
            {/* email ping animation */}
            <span className={`${pulse} relative -top-1 right-2 h-4 w-4 `}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
            </span>
        </button>
    );
}

export default EmailIconButton;
