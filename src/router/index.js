import {createRouter, createWebHistory} from 'vue-router';
import HomeCompo from "@/components/HomeCompo.vue";
import MemberList from "@/views/MemberList.vue";
import '@/assets/css/bootstrap.min.css';

const routes = [
    {
        path: '/',               // url 경로 지정
        name: 'HOME',           // 이 라우터 이름
        component: HomeCompo
    },
    {
        path: '/members',
        name: 'MemberList',
        component: MemberList,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});


export default router;
