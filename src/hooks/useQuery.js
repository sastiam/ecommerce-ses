import { useLocation } from "@reach/router"


export const useQuerySearch = queryParam => {
    const search = new URLSearchParams(useLocation().search);

    return search.get(queryParam);
}
