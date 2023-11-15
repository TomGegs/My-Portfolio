import images from '../../../data/images';
import EmailIconButton from '../../buttons/EmailIconButton';

function ContactIcons() {
    const contactData = [
        {
            icon: <EmailIconButton pulse="flex" />,
            text: 'tomgegs@outlook.com',
        },
        {
            icon: 'phoneIcon',
            text: '0407 250 035',
            link: 'tel:0407250035',
        },
        {
            icon: 'linkedinIcon',
            text: '/in/thomas-geoghegan/',
            link: 'https://www.linkedin.com/in/thomas-geoghegan/',
        },
        {
            icon: 'gitHubIcon',
            text: '/TomGegs',
            link: 'https://github.com/TomGegs',
        },
    ];
    // duration-150 text-[30px] lg:text-[40px] ease-in-out hover:cursor-pointer hover:text-altSecond"

    return (
        <div className="flex h-[70px] w-full flex-row items-end justify-between break-words text-center text-sm ">
            {contactData.map((contact) => {
                const IconComponent = images[contact.icon];
                return (
                    <div
                        key={contact.text}
                        className="flex flex-col items-center justify-center "
                    >
                        {contact.link ? (
                            <a
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center"
                            >
                                <IconComponent className="h-full text-[30px] duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond lg:h-[40px]" />
                                <p className="mt-2 hidden h-full items-end text-[0.6rem] min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                                    {contact.text}
                                </p>
                            </a>
                        ) : (
                            <>
                                {contact.icon}
                                <p className="mt-2 hidden h-full items-end text-[0.6rem] min-[300px]:text-[0.48rem] min-[321px]:text-[0.6rem] lg:flex lg:text-sm">
                                    {contact.text}
                                </p>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ContactIcons;
