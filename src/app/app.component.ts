import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentOneComponent } from './steps/component-one/component-one.component';
import { ComponentTwoComponent } from './steps/component-two/component-two.component';
import { ComponentThreeComponent } from './steps/component-three/component-three.component';
import { ComponentFiveComponent } from './steps/component-five/component-five.component';
import { ComponentFourComponent } from './steps/component-four/component-four.component';
import { Order } from './model/Order';
import { ViewContainer } from './viewContainer.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-component';
  currentStepIndex:number = 0;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  @ViewChild(ViewContainer, {static: false}) container: ViewContainer;

  items = [
    { id: 1, Component: ComponentOneComponent },
    { id: 2, Component: ComponentTwoComponent },
    { id: 3, Component: ComponentThreeComponent },
    { id: 4, Component: ComponentFourComponent },
    { id: 5, Component: ComponentFiveComponent },
  ];

  // order: Order = new Order(
  //   1,
  //   'John Doe',
  //   'john.doe@example.com',
  //   '555-1234',
  //   100,
  //   8,
  //   108,
  //   new Date(),
  //   '123 Main St, Cityville',
  //   '456 Billing St, Cityville',
  //   'City Area',
  //   'Express Delivery',
  //   'USD',
  //   'REF123456'
  // );
  

  order: Order = new Order();
  constructor(private injector: Injector, private componentFactoryResolver: ComponentFactoryResolver) {}


  ngOnInit() {
    this.order.id = 1;
    this.order.customerName = 'John Doe';
    this.order.customerEmail = 'john.doe@example.com';
    this.order.customerPhone = '555-1234';
    this.order.subtotal = 100;
    this.order.tax = 8;
    this.order.total = 108;
    this.order.orderDate = new Date();
    this.order.billingAddress = '123 Main St, Cityville';
    this.order.shippingAddress = '456 Billing St, Cityville';
    this.order.area = 'City Area';
    this.order.deliveryMethod = 'Express Delivery';
    this.order.currency = 'USD';
    this.order.referenceNumber = 'REF123456';

    
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.currentStepIndex = 1;
    this.getComponent();
    }, 0);
   }
  

  clearComponent() {
    this.dynamicComponentContainer.clear();
  }


  getComponent(){
    const item = this.items.find(c => Number(c.id) == this.currentStepIndex);
    if(item != null){
      this.loadComponent(item.Component);
    }
  }

  loadComponent(component: any) {
    // Use ComponentFactoryResolver to create a component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    // this.dynamicComponentContainer.clear(); // Clear existing components from the container

    // Create and attach the component to the view container
    const componentRef = this.dynamicComponentContainer.createComponent(componentFactory);

    // Access the component instance and pass data
    var componentInstance: any = componentRef.instance;
    componentInstance.order = this.order;
    

  }

  // loadComponent(component: any){

  //   //1. Create an instance of ConfirmDelete Component
  //   const confirmDelereComponenetFactory = 
  //             this.componentFactoryResolver
  //             .resolveComponentFactory(component);

  //   const containerViewRef = this.container.viewContainer;
  //   containerViewRef.clear();

  //   //Rendering the component in the DOM
  //   const componentRef =containerViewRef.createComponent(confirmDelereComponenetFactory);

  //   var componentInstance: any = componentRef.instance;
  //   componentInstance.order = this.order;

  //   // componentRef.instance.order = this.order;

  //   // this.onConfirmationObs = componentRef.instance.OnConfirmation.subscribe((data) => {
  //   //   this.onConfirmationObs.unsubscribe();
  //   //   containerViewRef.clear();

  //   //   if(data){
  //   //     //Delete the user
  //   //     let index = this.userService.users.indexOf(this.userToDelete);
  //   //     this.userService.users.splice(index, 1);
  //   //   }
  //   // })
  // }

  get currentStep() {
    // return this.items[this.currentStepIndex];
    return this.items.find(c => Number(c.id) == this.currentStepIndex)
  }

  moveNext() {
    this.clearComponent();
    if (this.currentStepIndex < this.items.length - 1) {
      
    }

    this.currentStepIndex++;
    this.getComponent();
  }

  movePrevious() {
    this.clearComponent();
    if (this.currentStepIndex > 0) {
      
    }

    this.currentStepIndex--;
    this.getComponent();
  }

  cancel() {
    // Implement cancel logic if needed
  }

  update() {
    // Implement update logic if needed
  }



  
}
