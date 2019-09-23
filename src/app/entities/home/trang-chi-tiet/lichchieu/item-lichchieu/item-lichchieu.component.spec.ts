import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLichchieuComponent } from './item-lichchieu.component';

describe('ItemLichchieuComponent', () => {
  let component: ItemLichchieuComponent;
  let fixture: ComponentFixture<ItemLichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
