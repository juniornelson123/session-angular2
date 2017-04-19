import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { TaskComponent } from './task/task.component'

import{ AuthGuard } from './_config/auth.guard'

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'tasks', component: TaskComponent, canActivate: [AuthGuard] }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)

