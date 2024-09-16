
import type { RouteParams } from "vue-router";

function useParams<P extends RouteParams>() {
    const route = useRoute();
    return computed(() => route.params as P);
}

export {
    useParams
}