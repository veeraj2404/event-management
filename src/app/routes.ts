import { Routes } from "@angular/router";


import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivate,
    EventListResolver
  } from './events/index'
  
import { Error404Component } from "./errors/404.component";

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivate]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('./user/user.module')
            .then(m => m.UserModule)}
]