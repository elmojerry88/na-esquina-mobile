import {AdminRoutes} from './admin.routes';
import { HomeRoutes } from './home.routes';


export function AppRoutes(){

    const isAdmin = false;
    
    return(
        isAdmin? <AdminRoutes/> : <HomeRoutes/> 
    )
}
