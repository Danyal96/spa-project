import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Setting from "./pages/setting/Setting";

let Routes = [
    {path:'/' , element:<Home />},
    {path:'/about' , element:<About />},
    {path:'/blog/*' , element:<Blog /> , children:[
        {path:'php' , element:<h2>php article</h2>},
        {path:'js' , element:<h2>javascript article</h2>},
        {path:'react' , element:<h2>react article</h2>},
    ]},
    {path:'/course/:courseId' , element:<Course />},
    {path:'/panel' , element:<PrivateRoute> <Panel /> </PrivateRoute>},
    {path:'/setting' , element:<PrivateRoute> <Setting /> </PrivateRoute>},
    {path:'/login' , element:<Login />},
]

export default Routes