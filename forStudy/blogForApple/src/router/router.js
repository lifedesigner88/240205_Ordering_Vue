import {createWebHistory, createRouter} from "vue-router";
import ListContent from "@/components/ListContent.vue";
import HomeTitle from "@/components/HomeTitle.vue";
import DetailVeiw from "@/components/DetailVeiw.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import AuthorInfo from "@/components/DetailVeiw/AuthorInfo.vue";
import CommentInfo from "@/components/DetailVeiw/CommentInfo.vue";


const routes = [
    {
        path: "/",
        component: HomeTitle,
    },

    {
        path: "/list",
        component: ListContent,
    },
    {
        path: "/detail/:id",
        component: DetailVeiw,
        children: [
            {
                path: "author",
                component: AuthorInfo,
            },
            {
                path: "comment",
                component: CommentInfo,
            },
        ],
        props: true,
    },
    {
        path: "/:anything(.*)",
        component: ErrorPage,
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router;