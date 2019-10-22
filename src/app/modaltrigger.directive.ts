import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';

@Directive({
  selector: '[app-modal-trigger]'
})
export class ModaltriggerDirective implements OnInit {

  private el: HTMLElement;

  ngOnInit(): void {
    this.el.addEventListener(
      'change', e => console.log('We should be op')
      );

  }

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;

  }

}
