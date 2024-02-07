import MemberCreate from "@/views/MemberCreate.vue";
import MemberList from "@/views/MemberList.vue";

export default  [
    {
        path: '/members',
        name: 'MemberList',
        component: MemberList,
    },
    {
        path: '/member/create',
            name: 'MemberCreate',
        component: MemberCreate,
    },
]