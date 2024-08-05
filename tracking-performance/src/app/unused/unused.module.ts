import { NgModule } from "@angular/core";
import { UnusedComponent } from "./unused.component";

@NgModule(
  {
    declarations: [UnusedComponent],
    exports: [UnusedComponent]
  }
)
export class UnusedModule{
}
