export interface Langage{
    map(arg0: (langage: Langage, index: number) => import("react").JSX.Element): import("react").ReactNode;
    image: string;
    name: string;
}