import images from "../../data/images";
import EmailIconButton from "../buttons/EmailIconButton";

const ContactIcons = () => {
    const contactData = [
        {
            icon: <EmailIconButton pulse={"flex"} />,
            text: "tomgegs@outlook.com",
        },
        {
            icon: "phoneIcon",
            text: "0407 250 035",
            link: "tel:0407250035",
        },
        {
            icon: "linkedinIcon",
            text: "/in/thomas-geoghegan/",
            link: "https://www.linkedin.com/in/thomas-geoghegan/",
        },
        {
            icon: "gitHubIcon",
            text: "/TomGegs",
            link: "https://github.com/TomGegs",
        },
    ];
    //duration-150 text-[30px] lg:text-[40px] ease-in-out hover:cursor-pointer hover:text-altSecond"

    return (
        <div className="h-[70px] w-full flex items-end flex-row justify-between break-words text-center text-sm ">
            {contactData.map((contact, index) => {
                const IconComponent = images[contact.icon];
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center ">
                        {contact.link ? (
                            <a
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center">
                                <IconComponent className="duration-150 ease-in-out hover:cursor-pointer h-full text-[30px] lg:h-[40px] hover:text-altSecond" />
                                <p className="hidden text-[0.6rem] mt-2 h-full items-end min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                                    {contact.text}
                                </p>
                            </a>
                        ) : (
                            <>
                                {contact.icon}
                                <p className="hidden text-[0.6rem] mt-2 h-full items-end min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                                    {contact.text}
                                </p>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ContactIcons;
