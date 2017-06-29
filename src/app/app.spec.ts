import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
 
let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
 
describe('Component: Root Component', () => {

    // We first describe our test suite giving it a title of Component: Root Component.
    // Inside of that test suite, we add our beforeEach blocks.
    // The first one is what configures TestBed for us with the appropriate dependencies 
    // required to run the component.It is also worth noting that this beforeEach is using 
    // an async parameter which will allow us to use the asynchronous compileComponents method.
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp],
 
            providers: [
 
            ],
 
            imports: [
                IonicModule.forRoot(MyApp)
            ]
 
        }).compileComponents();
 
    }));
 
    // The second beforeEach will trigger once the TestBed configuration has finished.
    // We use this block to create a reference to our fixture (which references the 
    // testing environment TestBed creates) and a reference to the actual 
    // component to be tested, which we store as comp.
    // Then in the afterEach we clear all of these references.
    beforeEach(() => {
 
        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
 
    });
 
    it('initialises with a root page of HomePage', () => {
        expect(comp['rootPage']).toBe(HomePage);
    });
 
});