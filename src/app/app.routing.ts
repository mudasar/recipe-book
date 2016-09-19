import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";


const routing = [
    {
        path:'', component:HomeComponent
    },
    { path: "**", component: PagenotfoundComponent }
];
export const appRoutingProviders: any[] = [

];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routing);