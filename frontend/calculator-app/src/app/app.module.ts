import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Ajoutez cette ligne
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
declarations: [
AppComponent,
CalculatorComponent
],
imports: [
BrowserModule,
FormsModule,
HttpClientModule  // Ajoutez cette ligne
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

