import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub:Subscription;
  isAuthenticated = false;

  constructor(
    private dataStorageService: DataStorageService,
    private authservice: AuthService
  ) {}


  ngOnInit(): void {
  this.userSub=  this.authservice.user.subscribe(user=>{
    this.isAuthenticated= !!user;
    //   !!user means it check whether user is null or not
    //  !user ? false : true;

    console.log(!user);
    console.log(!!user);
  });
  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe();
  }

  onLogout(){
this.authservice.logout();
  }


  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
