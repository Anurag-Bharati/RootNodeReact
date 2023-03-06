export default function SidebarMenuItem({ text, Icon, active }) {
    return (
        <div className="hoverEffect flex items-center justify-center xl:justify-start text-lg space-x-3 my-3">
            <Icon className="h-7 w-7" />
            <span className={`${active && "font-bold"} hidden xl:inline`}>
                {text}
            </span>
        </div>
    );
}
