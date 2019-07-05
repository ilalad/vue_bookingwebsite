const Home = () => import ('./components/Home.vue')
const searchpage = () => import ('./components/searchpage.vue')
const Listing = () => import ('./components/Listing.vue')
const thankYou = () => import ('./components/thankYou.vue')
const Contact = () => import ('./components/Contact.vue')

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
    path: '/nature-city-investment-cambodia-property',
    redirect: '/listing/nature-city-investment-cambodia-property'
  },
]

