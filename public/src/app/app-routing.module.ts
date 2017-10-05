import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { QuestionShowComponent } from './question-show/question-show.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';


const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children:  [
            {path: '', pathMatch: 'full', component: LoginComponent},
            {path: 'browse', pathMatch: 'full', component: QuestionListComponent},
            {path: 'new_question', pathMatch: 'full', component: QuestionNewComponent},
            {path: 'question/:id', component: QuestionShowComponent},
            {path: 'question/:id/new_answer', component: AnswerNewComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
