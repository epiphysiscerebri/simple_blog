import Main from '@/pages/Main';
import PostPage from '@/pages/PostPage'
import About from '@/pages/About'
import PostPageById from '@/pages/PostPageById'

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPageById
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router