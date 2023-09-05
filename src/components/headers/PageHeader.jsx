import images from '../../data/images';

function PageHeader({ title }) {
    return (
        <div className="mx-auto mb-8 mt-6 flex max-w-[1920px] px-10  lg:px-24 ">
            <div className="flex flex-row place-items-center rounded-2xl lg:border-black lg:bg-bgPrimary lg:p-4">
                <img
                    src={images.logoIcon}
                    alt={`Porfolio logo adjacent to ${title} title`}
                    className="mr-4 h-[50%]"
                />
                <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2rem] text-transparent lg:text-[3rem] ">
                    {title}
                </h2>
            </div>
        </div>
    );
}

export default PageHeader;
