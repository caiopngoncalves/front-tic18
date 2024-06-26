import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskModalComponent } from './edit-task-modal.component';

describe('EditTaskModalComponent', () => {
  let component: EditTaskModalComponent;
  let fixture: ComponentFixture<EditTaskModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditTaskModalComponent]
    });
    fixture = TestBed.createComponent(EditTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
