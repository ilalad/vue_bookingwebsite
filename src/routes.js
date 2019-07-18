const Home = () => import ('./components/Home.vue')
const searchpage = () => import ('./components/searchpage.vue')
const Listing = () => import ('./components/Listing.vue')
const thankYou = () => import ('./components/thankYou.vue')
const Contact = () => import ('./components/Contact.vue')
const Login = () => import ('./components/Auth/Login.vue')

export default[
  {
    path:'/',
    component: Home
  },
  {
    path:'/search/:id',
    component: searchpage
  },
  {
    path:'/listing/:id',
    component: Listing
  },
  {
    path:'/thanks',
    component: thankYou
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/login',
    component: Login
  },
  {
    path: '/nature-city-investment-cambodia-property',
    redirect: '/listing/nature-city-investment-cambodia-property'
  },
  // {
  //   path: '/jp',
  //   beforeEnter(to, from, next) {
  //       // Put the full page url including the protocol http(s) below
  //       window.location = "http://jp.vkirirom.com"
  //   }
  // },
  {
    path: '/kh',
    beforeEnter(to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = "http://kh.vkirirom.com"
    }
  },
  {
    path: '/*/',
    redirect: '/'
  },
]

