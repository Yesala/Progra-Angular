import { Post } from './landingPost.interface'

export interface Posts {
    page:          number;
    results:       Post[];
    total_pages:   number;
    total_results: number;
}