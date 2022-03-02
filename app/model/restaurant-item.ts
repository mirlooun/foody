export interface Restaurant {
    image: {
        url: string;
    };
    title: string;
    venue: {
        online: boolean;
        tags: string[];
        estimate_range: string;
        rating: {
            rating?: number;
            score: number;
        };
    };
}
