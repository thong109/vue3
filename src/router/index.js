import {
	createRouter,
	createWebHistory
} from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import axios from 'axios'
import HomeView from '@/views/home/HomeView.vue'
import MasterLayout from '@/layouts/home/MasterLayout.vue'
import CareerView from '@/views/home/CareerView.vue'
import CareerDetailView from '@/views/home/CareerDetailView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'
import DashboardView from '@/views/user/DashboardView.vue'
import UserLayout from '@/layouts/user/UserLayout.vue'
import RoomView from '@/views/user/RoomView.vue'
import ProfileView from '@/views/user/ProfileView.vue'

const routes = [{
		path: '/',
		component: MasterLayout,
		children: [{
				path: '',
				name: 'home',
				component: HomeView
			},
			{
				path: 'login',
				name: 'login',
				component: LoginView
			},
			{
				path: 'signup',
				name: 'signup',
				component: SignUpView
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
	{
		path: '/user/',
		component: UserLayout,
		meta: {
			requiresAuth: true,
			role: ['0', '1']
		}, // chỉ user truy cập
		children: [{
				path: 'dashboard',
				name: 'dashboard',
				component: DashboardView,
			},
			{
				path: 'room',
				name: 'room',
				component: RoomView
			},
			{
				path: 'profile',
				name: 'profile',
				component: ProfileView
			}
		]
	},
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

router.beforeEach(async (to, from, next) => {
	const token = localStorage.getItem('token')
	const role = String(localStorage.getItem('role'))

	// Không cho truy cập login / signup nếu đã login
	if (token && (to.name === 'login' || to.name === 'signup')) {
		return next({
			name: 'home'
		})
	}

	// Cần đăng nhập
	if (to.meta.requiresAuth) {
		if (!token || !role) {
			return next({
				name: 'login'
			})
		}

		// Kiểm tra quyền
		if (Array.isArray(to.meta.role) && !to.meta.role.includes(role)) {
			alert('Bạn không có quyền truy cập trang này!')
			return next({
				name: 'home'
			})
		}

		// Kiểm tra token hợp lệ
		const valid = await checkTokenAuthenticity()

		if (!valid) {
			return next({
				name: 'login'
			})
		}

		return next()
	}

	next()
})

const checkTokenAuthenticity = async () => {
	try {
		await axios.get('http://127.0.0.1:8000/api/user', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				Accept: 'application/json'
			}
		})
		return true
	} catch (error) {
		localStorage.removeItem('token')
		localStorage.removeItem('role')
		return false
	}
}

export default router