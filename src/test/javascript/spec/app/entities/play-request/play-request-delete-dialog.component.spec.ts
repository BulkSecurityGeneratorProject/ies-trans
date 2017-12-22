/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { GamestransactionTestModule } from '../../../test.module';
import { PlayRequestDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/play-request/play-request-delete-dialog.component';
import { PlayRequestService } from '../../../../../../main/webapp/app/entities/play-request/play-request.service';

describe('Component Tests', () => {

    describe('PlayRequest Management Delete Component', () => {
        let comp: PlayRequestDeleteDialogComponent;
        let fixture: ComponentFixture<PlayRequestDeleteDialogComponent>;
        let service: PlayRequestService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [GamestransactionTestModule],
                declarations: [PlayRequestDeleteDialogComponent],
                providers: [
                    PlayRequestService
                ]
            })
            .overrideTemplate(PlayRequestDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PlayRequestDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PlayRequestService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
