import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appShowlist]'
})
export class ShowlistDirective {

  @Input() set appShowlist(condition: boolean) {
    if(condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }
  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
