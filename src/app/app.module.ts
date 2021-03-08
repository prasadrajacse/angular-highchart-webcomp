import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';


//import { AppComponent } from './app.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    //AppComponent,
    OutputGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [OutputGraphComponent],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const customNgHighchart = createCustomElement(OutputGraphComponent,{injector});
    customElements.define('app-output-graph',customNgHighchart);
  }
 
  ngDoBootstrap(){
    
  }

 }
