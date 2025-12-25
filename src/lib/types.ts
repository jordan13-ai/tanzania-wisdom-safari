export interface Route {
    title: string;
    slug: string;
    description: string;
    duration: string; // e.g. "6-8 Days"
    difficulty: "Medium" | "Hard" | "Experts Only";
    successRate: string; // e.g. "95%"
    sceneryRating: 3 | 4 | 5; // Stars
    crowdLevel: "Low" | "Medium" | "High";
    image: string;
    highlights: string[];
}
