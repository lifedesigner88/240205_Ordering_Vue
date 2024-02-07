import {createRouter, createWebHistory} from 'vue-router';
import HomeCompo from "@/components/HomeCompo.vue";
import '@/assets/css/bootstrap.min.css';
import LoginCompo from "@/views/LoginCompo.vue";
import memberRouter from "@/router/memberRouter.js";
import OrderList from "@/router/orderRouter.js";

const routes = [
    {
        path: '/',               // url 경로 지정
        name: 'HOME',           // 이 라우터 이름
        component: HomeCompo
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginCompo,
    },

    // 스프레드 연산자로 불리고, 주로 배열 요소를 다른 배열 요소에 합할때 사용.
    ...memberRouter,
    ...OrderList,

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
