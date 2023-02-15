export default function SidebarMenuItem({ text, Icon, active }) {
    return (
        <div
            className={`${
                active &&
                "text-black  bg-gray-200  rounded-full w-[52px] xl:w-auto h-[52px] xl:h-auto xl:p-3 "
            } hoverEffect flex items-center justify-center xl:justify-start text-lg space-x-3 my-3`}
        >
            <Icon className="h-7 w-7" />
            <span className={`${active && "font-bold "} hidden xl:inline`}>
                {text}
            </span>
        </div>
    );
}
