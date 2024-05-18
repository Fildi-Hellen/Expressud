import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { MenuItem } from '../Models/menu-item';

@Component({
  selector: 'app-resturant-management',
  templateUrl: './resturant-management.component.html',
  styleUrl: './resturant-management.component.css'
})
export class ResturantManagementComponent implements OnInit {
  menuItems: any[] = [];
  menuForm: FormGroup;
  isEditMode: boolean = false;
  currentMenuItem: any;

  constructor(private fb: FormBuilder, private modalService: NgbModal, private restaurantService: RestaurantService) {
    this.menuForm = this.fb.group({
      restaurantID: [''],
      price: [''],
      menuItemName: [''],
      itemID: [''],
      description: [''],
      restaurantName: [''],
      availability: [false],
      photoUrl: [''],
      categoryName: ['']
    });
  }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.restaurantService.getMenuItems().subscribe((res: any) => {
      this.menuItems = res.data;
    });
  }

  openAddMenuModal(content: any) {
    this.isEditMode = false;
    this.menuForm.reset();
    this.modalService.open(content, { size: 'lg' });
  }

  openEditMenuModal(content: any, item: any) {
    this.isEditMode = true;
    this.currentMenuItem = item;
    this.menuForm.patchValue(item);
    this.modalService.open(content, { size: 'lg' });
  }

  addNewMenu() {
    if (this.menuForm.valid) {
      this.restaurantService.addMenuItem(this.menuForm.value).subscribe(() => {
        this.loadMenuItems();
        this.modalService.dismissAll();
      });
    }
  }

  updateMenu() {
    if (this.menuForm.valid) {
      this.restaurantService.updateMenuItem(this.currentMenuItem.itemID, this.menuForm.value).subscribe(() => {
        this.loadMenuItems();
        this.modalService.dismissAll();
      });
    }
  }

  deleteMenu(itemID: number) {
    this.restaurantService.deleteMenuItem(itemID).subscribe(() => {
      this.loadMenuItems();
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.menuForm.patchValue({ photoUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }
}
