import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import LandingView from '@/views/LandingView.vue'
import axios from 'axios'
import StandbyView from '@/views/StandbyView.vue'
import LocationView from '@/views/LocationView.vue'
import DriverView from '@/views/DriverView.vue'
import HomeView from '@/views/home/HomeView.vue'
import MasterLayout from '@/layouts/home/MasterLayout.vue'
import CareerView from '@/views/home/CareerView.vue'
import CareerDetailView from '@/views/home/CareerDetailView.vue'

const routes = [{
        path: '/',
        component: MasterLayout,
        children: [{
                path: '',
                component: HomeView
            },
            {
                path: 'login',
                component: LoginView
            },
            {
                path: 'career',
                component: CareerView
            },
            {
                path: 'career/:id',
                component: CareerDetailView
            }
        ]
    },
    // {
    //     path: '/landing',
    //     name: 'landing',
    //     component: LandingView,
    //     meta: {
    //         requiresAuth: true,
    //         role: 'admin'
    //     }, // chỉ admin truy cập
    // },
    // {
    //     path: '/location',
    //     name: 'location',
    //     component: LocationView,
    //     meta: {
    //         requiresAuth: true,
    //         role: 'user'
    //     }, // chỉ user truy cập
    // },
    // {
    //     path: '/standby',
    //     name: 'standby',
    //     component: StandbyView,
    //     meta: {
    //         requiresAuth: true
    //     }, // mọi người login đều được vào
    // },
    // {
    //     path: '/driver',
    //     name: 'driver',
    //     component: DriverView,
    //     meta: {
    //         requiresAuth: true,
    //         role: 'driver'
    //     }, // chỉ driver truy cập
    // },
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('role')

//     if (to.meta.requiresAuth) {
//         if (!role) {
//             // Chưa đăng nhập
//             return next({
//                 name: 'login'
//             })
//         }

//         if (to.meta.role && to.meta.role !== role) {
//             // Không đúng quyền
//             alert('Bạn không có quyền truy cập trang này!')
//             return next({
//                 name: 'login'
//             })
//         }
//     }

//     next()
// })

export default router