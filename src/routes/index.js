import Home from '../page/Home/index';
import DefaultLayout from '../components/Layout/Component';
import Following from '../page/Following/index';
import Profile from '../page/Profile';
import Upload from '../page/Upload';
import HeaderOnly from '../components/Layout/HeaderOnly';
import Search from '../page/Search';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/default', component: DefaultLayout },
    { path: '/upload', component: Upload , layout :HeaderOnly },
    { path: '/search', component: Search, layout :null },
];


const privateRoutes = [

]



export {publicRoutes,privateRoutes}