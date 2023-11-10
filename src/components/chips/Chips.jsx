function Chips({ label }) {
    return (
        <div className="m-1 flex w-fit cursor-default select-none items-center justify-center rounded-full border border-primary bg-gray-100 px-2 py-1 font-medium text-gray-700 ">
            <div className="max-w-full flex-initial text-xs font-normal leading-none">
                {label}
            </div>
        </div>
    );
}

export default Chips;
