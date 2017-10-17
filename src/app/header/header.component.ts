import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();


  public onSelect(feature: string) {
    console.log(feature);
    this.featureSelected.emit(feature);
  }

}
