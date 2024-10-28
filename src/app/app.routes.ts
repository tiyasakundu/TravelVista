import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingComponent } from './booking/booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AccountComponent } from './account/account.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },

    {
        path:'aboutus',
        component:AboutusComponent
    },
    
    {
        path:'booking',
        component:BookingComponent
    },
    
    {
        path:'contactus',
        component:ContactusComponent
    },
    
    {
        path:'account',
        component:AccountComponent
    },

    {
        path:'booking-details/:id',
        component:BookingDetailsComponent
    },

    {
        path:'user',
        component:UserComponent
    },

    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'error',
        component: ErrorComponent 
    },

    {
        path: '**',
        redirectTo: 'error',
        pathMatch: 'full'
    }


];
