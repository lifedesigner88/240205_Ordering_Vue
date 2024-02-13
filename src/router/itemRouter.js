import ItemList from "@/views/ItemList.vue";
import ItemListManage from "@/views/ItemListManage.vue";
import ItemCreate from "@/views/ItemCreate.vue";

export default [
    {
        path: '/items',
        name: 'ItemListRouter',
        component: ItemList,
    },
    {
        path: '/items/manage',
        name: 'ItemListManageRouter',
        component: ItemListManage,
    },
    {
        path: '/item/create',
        name: 'ItemCreate',
        component: ItemCreate,
    },

]