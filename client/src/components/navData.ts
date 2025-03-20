export interface NavItems {
    label: string;
    href: string;
    dropdown?: NavItems[];
}
export const navItems: NavItems[] = [
    {
        label: "Tracks",
        href: "/#track"
    },
    {
        label: "Registration",
        href: "/#registration"
    },
    {
        label: "Schedule",
        href: "/#schedule"
    },
    {
        label: "Prizes",
        href: "/#prizes"
    },
    {
        label: "Sponsorship",
        href: "/#sponsorship"
    },
    {
        label: "About",
        href: "/#about",
    },
];
